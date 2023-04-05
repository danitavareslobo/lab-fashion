import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CollectionServicesService } from 'src/app/services/collection-services.service';

@Component({
  selector: 'app-edit-collection',
  templateUrl: './edit-collection.component.html',
  styleUrls: ['./edit-collection.component.scss']
})
export class EditCollectionComponent implements OnInit {
  constructor(private _activated: ActivatedRoute, 
              private _service: CollectionServicesService,
              private _toast: ToastrService,
              private _router: Router) { }

  public id: any;
  public collection: any;
  collectionForm: FormGroup = new FormGroup( {
    id: new FormControl("", [Validators.required]),
    nome: new FormControl("", [Validators.required, Validators.minLength(2)]),
    responsavel: new FormControl("", [Validators.required, Validators.minLength(4)]),
    estacao: new FormControl("", [Validators.required, Validators.minLength(4)]),
    marca: new FormControl("", [Validators.required, Validators.minLength(4)]),
    orcamento: new FormControl("", [Validators.required, Validators.min(1)]),
    anoLancamento: new FormControl("", [Validators.required, Validators.minLength(4)])
  });

  ngOnInit(): void {
    this._activated.params.subscribe(params => {
      if(params['id']) {
        this.id = params['id'];
        this._service.getCollectionById(this.id).then((response: any) => {
          this.collection = response;
          this.collectionForm.patchValue(response);
        });
      }
      else{
        this._router.navigate(['/private/collections']);
      }
    });
  }

  onEdit(){
    this._service.updateCollection(this.collectionForm.value).then((response) =>{ this._toast.info("Coleção Editada!")});
    this._router.navigate(['/private/collections']);
  }

  onBack(){
    this._router.navigate(['/private/collections']);
  }

  onDelete(row: any){
     this._service.deleteCollection(row.collection.id).then((response) => this._toast.error("Coleção Excluída!"));
     this._router.navigate(['/private/collections']);
  }
}
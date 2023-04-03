import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-collection',
  templateUrl: './edit-collection.component.html',
  styleUrls: ['./edit-collection.component.scss']
})
export class EditCollectionComponent implements OnInit {
  constructor(private _activated: ActivatedRoute, 
              private _api: HttpClient,
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
        this._api.get("http://localhost:3000/colecoes/"+ this.id).subscribe((response: any) => {
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
    this._api.put<any>("http://localhost:3000/colecoes/"+ this.id, {
      nome: this.collectionForm.get("nome")?.value,
      responsavel: this.collectionForm.get("responsavel")?.value,
      estacao: this.collectionForm.get("estacao")?.value,
      marca: this.collectionForm.get("marca")?.value,
      modelos: this.collection.modelos,
      orcamento: this.collectionForm.get("orcamento")?.value,
      anoLancamento: this.collectionForm.get("anoLancamento")?.value
    }).subscribe(data => console.log("retorno", data));

    this._router.navigate(['/private/collections']);
  }

  onBack(){
    this._router.navigate(['/private/collections']);
  }

  onDelete(row: any){
     this._api.delete<any>("http://localhost:3000/colecoes/"+ row.collection.id).subscribe(data => console.log("retorno", data));
     this._router.navigate(['/private/collections']);
  }
}
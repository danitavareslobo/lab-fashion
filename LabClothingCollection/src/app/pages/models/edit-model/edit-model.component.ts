import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CollectionServicesService } from 'src/app/services/collection-services.service';
import { ModelServicesService } from 'src/app/services/model-services.service';

@Component({
  selector: 'app-edit-model',
  templateUrl: './edit-model.component.html',
  styleUrls: ['./edit-model.component.scss']
})
export class EditModelComponent implements OnInit {
  public id: any;
  public model: any;
  public collections: any;
  modelForm: FormGroup = new FormGroup({
      id: new FormControl("", [Validators.required]),
      nome: new FormControl("", [Validators.required, Validators.minLength(2)]),
      tipoModelo: new FormControl("", [Validators.required, Validators.min(1)]),
      colecao: new FormControl("", [Validators.required, Validators.min(1)]),
      responsavel: new FormControl("", [Validators.required, Validators.minLength(4)]),
      possuiBordado: new FormControl("", [Validators.required, Validators.minLength(4)]),
      possuiEstampa: new FormControl("", [Validators.required, Validators.minLength(4)])
    });

    constructor(private _activated: ActivatedRoute,
                private _service: ModelServicesService,
                private _serviceCollection: CollectionServicesService,
                private _toast: ToastrService,
                private _router: Router) { }

    ngOnInit(): void {
      this._activated.params.subscribe(params => {
        if(params['id']){
          this.id = params['id'];
          this._service.getModelById(this.id).then((response: any) => {
            this.model = response;
            this.modelForm.patchValue(response);
          });

          this._serviceCollection.getCollections().then((response: any) => {
            this.collections = response;
          });
        }
        else{
          this._router.navigate(['/private/models']);
        }
      });
    }

    onEdit() {
      this._service.updateModel(this.modelForm.value).then((response) => this._toast.info("Modelo editado!"));
     this._router.navigate(['/private/models']);
    }

    onBack(){
      this._router.navigate(['/private/models']);
    }

    onDelete(row: any){
      this._service.deleteModel(this.id).then((response) => this._toast.error("Modelo excluído!"));
      this._router.navigate(['/private/models']);
   }
}

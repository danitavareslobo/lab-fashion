import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CollectionServicesService } from 'src/app/services/collection-services.service';
import { ModelServicesService } from 'src/app/services/model-services.service';

@Component({
  selector: 'app-register-model',
  templateUrl: './register-model.component.html',
  styleUrls: ['./register-model.component.scss']
})
export class RegisterModelComponent implements OnInit{
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

  constructor(private _service: ModelServicesService,
              private _serviceCollection: CollectionServicesService,
              private _toast: ToastrService,
              private _router: Router) { }

  ngOnInit(): void {
    this._serviceCollection.getCollections().then((response: any) => {
      this.collections = response;
    });
  }

  onCreate(){
    this._service.createModel(this.modelForm.value).then((response) => this._toast.info("Modelo criado!"));
     this._router.navigate(['/private/models']);
  }

  onList() {
    this._router.navigate(['/private/models'])
  }
}

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CollectionServicesService } from 'src/app/services/collection-services.service';

@Component({
  selector: 'app-register-collection',
  templateUrl: './register-collection.component.html',
  styleUrls: ['./register-collection.component.scss']
})
export class RegisterCollectionComponent {
  collectionForm: FormGroup = new FormGroup( {
    id: new FormControl("", [Validators.required]),
    nome: new FormControl("", [Validators.required, Validators.minLength(2)]),
    responsavel: new FormControl("", [Validators.required, Validators.minLength(4)]),
    estacao: new FormControl("", [Validators.required, Validators.minLength(4)]),
    marca: new FormControl("", [Validators.required, Validators.minLength(4)]),
    orcamento: new FormControl("", [Validators.required, Validators.min(1)]),
    anoLancamento: new FormControl("", [Validators.required, Validators.minLength(4)])
  });
  constructor(private _router: Router,
              private _service: CollectionServicesService,
              private _toast: ToastrService) {}

  onCreate(){
    this._service.createCollection(this.collectionForm.value).then((response) => this._toast.info("Coleção criada!"));
    this._router.navigate(['/private/collections']);
  }

  onList() {
    this._router.navigate(['/private/collections'])
  }
}

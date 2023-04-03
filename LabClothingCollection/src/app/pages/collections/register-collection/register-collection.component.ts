import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
              private _api: HttpClient) {}

  onCreate(){
    this._api.post<any>("http://localhost:3000/colecoes/", {
      nome: this.collectionForm.get("nome")?.value,
      responsavel: this.collectionForm.get("responsavel")?.value,
      estacao: this.collectionForm.get("estacao")?.value,
      marca: this.collectionForm.get("marca")?.value,
      orcamento: this.collectionForm.get("orcamento")?.value,
      anoLancamento: this.collectionForm.get("anoLancamento")?.value
    }).subscribe(data => console.log("retorno", data));

    this._router.navigate(['/private/collections']);
  }

  onList() {
    this._router.navigate(['/private/collections'])
  }
}

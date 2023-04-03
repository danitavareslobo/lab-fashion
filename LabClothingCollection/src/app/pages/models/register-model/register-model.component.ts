import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private _api: HttpClient,
                private _router: Router) { }

  ngOnInit(): void {
    this._api.get("http://localhost:3000/colecoes/").subscribe((response: any) => {
      this.collections = response;
    });
  }

  onCreate(){
    this._api.post<any>("http://localhost:3000/modelos/", {
          nome: this.modelForm.get("nome")?.value,
          tipoModelo: this.modelForm.get("tipoModelo")?.value,
          colecao: this.modelForm.get("colecao")?.value,
          responsavel: this.modelForm.get("responsavel")?.value,
          possuiBordado: this.modelForm.get("possuiBordado")?.value,
          possuiEstampa: this.modelForm.get("possuiBordado")?.value
        }).subscribe(data => console.log("retorno", data));

     this._router.navigate(['/private/models']);
  }

  onList() {
    this._router.navigate(['/private/models'])
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

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
                private _api: HttpClient,
                private _router: Router) { }

    ngOnInit(): void {
      this._activated.params.subscribe(params => {
        if(params['id']){
          this.id = params['id'];
          this._api.get("http://localhost:3000/modelos/"+ this.id).subscribe((response: any) => {
            this.model = response;
            this.modelForm.patchValue(response);
          });

          this._api.get("http://localhost:3000/colecoes/").subscribe((response: any) => {
            this.collections = response;
          });
        }
        else{
          this._router.navigate(['/private/models']);
        }
      });
    }

    onEdit() {
      this._api.put<any>("http://localhost:3000/modelos/"+ this.id, {
          nome: this.modelForm.get("nome")?.value,
          tipoModelo: this.modelForm.get("tipoModelo")?.value,
          colecao: this.modelForm.get("colecao")?.value,
          responsavel: this.modelForm.get("responsavel")?.value,
          possuiBordado: this.modelForm.get("possuiBordado")?.value,
          possuiEstampa: this.modelForm.get("possuiBordado")?.value
        }).subscribe(data => console.log("retorno", data));

     this._router.navigate(['/private/models']);
    }

    onBack(){
      this._router.navigate(['/private/models']);
    }

    onDelete(row: any){
      this._api.delete<any>("http://localhost:3000/modelos/"+ row.collection.id).subscribe(data => console.log("retorno", data));
      this._router.navigate(['/private/models']);
   }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModelServicesService {

  constructor(private _api: HttpClient) { }

  async getModels() {
    let response: any = await this._api.get("http://localhost:3000/modelos").toPromise()
    response=response.sort(function(a: any, b: any)  {
      return parseFloat(b.orcamento) - parseFloat(a.orcamento);
    }) || [];
    return new Promise((resolve) => resolve(response));
  }

  async getModelById(id: number) {
    let response: any = await this._api.get("http://localhost:3000/modelos/"+ id).toPromise() || [];
    return new Promise((resolve) => resolve(response))
  }

  async updateModel(collection: any){
    let response = this._api.put("http://localhost:3000/modelos/"+ collection.id, collection).toPromise();
    return new Promise((resolve) => resolve(response))
  }

  async createModel(collection: any){
    let response = this._api.post("http://localhost:3000/modelos/", collection).toPromise();
    return new Promise((resolve) => resolve(response))
  }

  async deleteModel(id: number){
    let response = this._api.delete("http://localhost:3000/modelos/" + id).toPromise();
    return new Promise((resolve) => resolve(response))
  }
}

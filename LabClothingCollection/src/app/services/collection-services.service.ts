import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CollectionServicesService {

  constructor(private _api: HttpClient) { }

  async getCollections() {
    let response: any = await this._api.get("http://localhost:3000/colecoes").toPromise()
    response=response.sort(function(a: any, b: any)  {
      return parseFloat(b.orcamento) - parseFloat(a.orcamento);
    }) || [];
    return new Promise((resolve) => resolve(response));
  }

  async getCollectionById(id: number) {
    let response: any = await this._api.get("http://localhost:3000/colecoes/"+ id).toPromise() || [];
    return new Promise((resolve) => resolve(response))
  }

  async updateCollection(collection: any){
    let response = this._api.put("http://localhost:3000/colecoes/"+ collection.id, collection).toPromise();
    return new Promise((resolve) => resolve(response))
  }

  async createCollection(collection: any){
    let response = this._api.post("http://localhost:3000/colecoes/", collection).toPromise();
    return new Promise((resolve) => resolve(response))
  }

  async deleteCollection(id: number){
    let response = this._api.delete("http://localhost:3000/colecoes/" + id).toPromise();
    return new Promise((resolve) => resolve(response))
  }
}

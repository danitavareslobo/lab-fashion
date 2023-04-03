import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CollectionServicesService {

  constructor(private _api: HttpClient) { }

  async getCollections() {

    let response: any = await this._api.get("http://localhost:3000/colecoes").toPromise()
    console.log(response)
     response=response.sort(function(a: any, b: any)  {
    
            return parseFloat(b.orcamento) - parseFloat(a.orcamento);
          }) || [];
          console.log(response)
    return new Promise((resolve) => resolve(response))

  }
}

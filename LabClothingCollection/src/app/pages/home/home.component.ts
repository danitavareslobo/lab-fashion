import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private _api: HttpClient) {

  }

  public collections: any[] = [];
  public models: any[] = [];

  public valor1: number = 0.00;
  public valor2: number = 0.00;
  public valor3: number = 0.00;

  ngOnInit(): void {
    this._api.get("http://localhost:3000/colecoes").subscribe((response: any) => {
      this.collections = response.sort(function(a: any, b: any)  {
        return parseFloat(b.orcamento) - parseFloat(a.orcamento);
      }) || [];

      this.valor1 = this.collections.length;

      if(this.valor1 > 0) {
        const soma = this.collections.map(c => c.orcamento).reduce((soma, i) => {
          return soma + i;
        });
  
        this.valor3 = (soma / this.valor1) || 0.00;
      }
    });

    this._api.get("http://localhost:3000/modelos").subscribe((response: any) => {
      this.models = response || [];

      this.valor2 = this.models.length;
    });
  } 
}
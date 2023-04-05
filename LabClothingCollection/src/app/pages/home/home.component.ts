import { Component, OnInit } from '@angular/core';
import { CollectionServicesService } from 'src/app/services/collection-services.service';
import { ModelServicesService } from 'src/app/services/model-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private _serviceModel: ModelServicesService,
              private _serviceCollection: CollectionServicesService) { }

  public collections: any[] = [];
  public models: any[] = [];
  public totalColecoes: number = 0.00;
  public totalModelos: number = 0.00;
  public media: number = 0.00;

  ngOnInit(): void {
    let soma = 0.00;
    this._serviceCollection.getCollections().then((response: any) => {
      this.totalColecoes = response.length;
      
      if(this.totalColecoes > 0) {
        response.forEach((item: any) => {
          soma = soma + Number(item.orcamento);
        });

        this.media = (soma / this.totalColecoes) || 0.00;
      }
    });

    this._serviceCollection.getCollections().then((response: any) => {
      this.collections = response.sort(function(a: any, b: any)  {
        return parseFloat(b.orcamento) - parseFloat(a.orcamento);
      }).slice(0, 5) || [];
    });

    this._serviceModel.getModels().then((response: any) => {
      this.models = response || [];
      this.totalModelos = this.models.length;
    });
  } 
}
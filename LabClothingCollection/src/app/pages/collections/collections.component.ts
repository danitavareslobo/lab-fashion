import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {CollectionServicesService} from '../../services/collection-services.service'

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {
  public collections: any[] = [];

  constructor(private _router: Router,
              private _api: HttpClient,
              private _service: CollectionServicesService) {

  }

  ngOnInit(): void {
    this._service.getCollections().then((response: any)=> {
      console.log(response);
      this.collections = response
    });
   
  }

  onCreate() {
    this._router.navigate(['/private/register-collection'])
  }

  onEdit(row: any): void {
    this._router.navigate(['/private/edit-collection/'+ row.id])
  }
}

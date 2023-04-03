import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.scss']
})
export class ModelsComponent implements OnInit {
  public models: any[] = [];

  constructor(private _router: Router,
              private _api: HttpClient) {

  }
  ngOnInit(): void {
    this._api.get("http://localhost:3000/modelos").subscribe((response: any) => {
      this.models = response || [];
    });
  }

onCreateModel() {
 this._router.navigate(['/private/register-model'])
}

onEdit(row: any): void {
  this._router.navigate(['/private/edit-model/'+ row.id])
}
}
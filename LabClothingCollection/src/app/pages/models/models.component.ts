import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModelServicesService } from 'src/app/services/model-services.service';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.scss']
})
export class ModelsComponent implements OnInit {
  public models: any[] = [];

  constructor(private _router: Router,
              private _service: ModelServicesService) {

  }
  ngOnInit(): void {
    this._service.getModels().then((response: any) => {
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
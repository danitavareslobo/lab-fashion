import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  constructor(private _router: Router) { }

  public bindingRouters(rota: string): string {
    const URL: string = this._router.url;
    let bindingClass: string = "";

    let rotaArray = rota.split(';');
    rotaArray.forEach((item) =>{
      if(URL.includes(item)) {
        bindingClass = "active-link";
      }
    })

    return bindingClass;
  }
}
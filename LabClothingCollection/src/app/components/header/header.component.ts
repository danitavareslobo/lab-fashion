import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  constructor(private _router: Router) {

  }
  logout() {
    localStorage.removeItem('isLogged');
    this._router.navigate(['/login']);
  }

  }  
  
  

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class LoginGuard implements CanActivate {
    constructor(private _router: Router) {}

    canActivate(): Promise<boolean> {
        return new Promise(
            async (resolve) => {
                const localStorageItem = localStorage.getItem("isLogged");

                console.log("Guard: ", localStorageItem)
                
                if(!localStorageItem) {
                  this._router.navigate(["/login"]);

                  resolve(false);
                  return;
                }
                
                resolve(true);
                return;
            }
        );        
    }
}
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  constructor(private _router: Router) {

  }
  signupForm!: FormGroup;

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.signupForm = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      userCompany: new FormControl('', [Validators.required]),
      userCnpj: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
      userEmail: new FormControl('', [Validators.required, Validators.email]),
      userPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
      userConfirmpassword: new FormControl('', [Validators.required])
    });
  }

  onSignup() {
    if(this.signupForm.controls['userPassword'].value != this.signupForm.controls['userConfirmpassword'].value){
      alert("Senhas não conferem");
      return;
    }

    if(!this.verificaCnpj(this.signupForm.controls['userCnpj'].value)){
      alert("CNPJ inválido");
      return;
    }

    this._router.navigate(['/home']);
  }

  verificaCnpj (userCnpj: string) {
    userCnpj = userCnpj.toString();
    userCnpj = userCnpj.replace(/[^0-9]/g, '');

    if (userCnpj.length === 14 ) {
        return true;
    } 
    else {
      return false;
    }
  }
}

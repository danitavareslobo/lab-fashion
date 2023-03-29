import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  constructor(private _router: Router) {

  }
  resetForm!: FormGroup;
  formularioEnviado: Boolean = false;

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.resetForm = new FormGroup({
      userEmail: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  onReset() {
    this.formularioEnviado = true;
  }

  onIrLogin(){
    this._router.navigate(['/login']);
  }
}

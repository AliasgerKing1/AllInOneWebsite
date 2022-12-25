import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  UserForm: FormGroup;
  checkForm:Boolean = false;
constructor(private _fb : FormBuilder) {
  this.UserForm = this._fb.group({
    fname  : ["", Validators.required],
    lname  : ["", Validators.required],
    email  : ["", [Validators.required, Validators.email]],
    password  : ["", Validators.required],
    re_password  : ["", Validators.required],
    terms: [""],
    day: ["", Validators.required],
    month: ["", Validators.required],
    year: ["", Validators.required],
    gender: ["", Validators.required],
    contact:[null, Validators.required],
    codes: ["", Validators.required]
  })
}

submit(){
if(this.UserForm.invalid) {
  this.checkForm = true;
}
}
}

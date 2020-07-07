import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  showLogin = true;
  rememberPassword = false;
  typePassword = 'password';
  systemInfo;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.loginForm = this.formBuilder.group({
      login: [null, [Validators.required, Validators.minLength(5)]],
      password: [null, [Validators.required, Validators.minLength(6)]],
    });
  }
  
  hide = true
  get loginInput() { return this.loginForm.get('login'); }
  get passwordInput() { return this.loginForm.get('password'); }  
  ngOnInit(): void {
    this.Login();
  }

  Login() {
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loggedIn: boolean = false;
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      email: [''],
      password: ['']
    });
  }

  ngOnInit(): void {}

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  onSubmit() {
    if (this.form.valid) {
      const email = this.email?.value;
      const password = this.password?.value;
      if (email === "marcosm2209@gmail.com" && password === "marcos1") {
        this.router.navigate(['/home']);
        this.loggedIn = true;
      } else {
        alert("Los datos ingresados no son correctos");
      }
    }
  }
}


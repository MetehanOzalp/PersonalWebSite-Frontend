import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { timer } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    if (this.loginForm.valid) {
      let loginModel = Object.assign({}, this.loginForm.value);
      this.authService.login(loginModel).subscribe(
        (response) => {
          this.localStorageService.set('token', response.data.token);
          this.localStorageService.set('email', loginModel.email);
          timer(25).subscribe((p) => {
            window.location.href = '/';
          });
        },
        (responseError) => {
          console.log('hata');
        }
      );
    } else {
      console.log('Tüm alanları doldurun');
    }
  }
}

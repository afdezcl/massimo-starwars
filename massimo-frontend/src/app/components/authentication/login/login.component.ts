import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/auth/login.interface';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private readonly ERROR_CODE_WRONG_LOGIN = 401;
  public loginForm: FormGroup;
  public dataLoading = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthenticationService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.initLoginForm();
  }

  initLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  get form() {
    return this.loginForm.controls;
  }

  loginUser() {
    if (this.loginForm.valid) {
      const user: Login = {
        email: this.form.email.value,
        password: this.form.password.value,
      };

      this.authService.login(user)
        .subscribe(() => {
          this.router.navigateByUrl('/ships');
          this.toastr.success('Welcome!');
        },
          (error: HttpErrorResponse) => {
            this.handleLoginError(error);
          });
    }
  }

  handleLoginError(error: HttpErrorResponse): void {
    if (error.status === this.ERROR_CODE_WRONG_LOGIN) {
      this.toastr.error('Email or password was not correct');
    }
  }

}


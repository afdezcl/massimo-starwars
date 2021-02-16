import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Register } from 'src/app/models/auth/register.interface';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  private readonly ERROR_CODE_USER_EXISTS = 409;
  registerForm: FormGroup;
  dataLoading = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.initRegisterForm();
  }

  initRegisterForm(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['']
    }, { validators: this.checkPasswords });
  }

  get form() {
    return this.registerForm.controls;
  }


  registerUser() {
    if (this.registerForm.valid) {
      const user: Register = {
        username: this.form.username.value,
        email: this.form.email.value,
        password: this.form.password.value,
      };

      this.authService.register(user)
        .subscribe((response: any) => {
          this.router.navigateByUrl('');
        },
          (error: HttpErrorResponse) => {
            this.handleRegisterError(error);
          });
    }
  }

  handleRegisterError(error: HttpErrorResponse): void {
    if (error.status === this.ERROR_CODE_USER_EXISTS) {

    }
  }


  checkPasswords(form: FormGroup) {
    const password = form.controls.password.value;
    const confirmPassword = form.controls.confirmPassword.value;
    return password === confirmPassword ? null : { notSame: true };
  }

}

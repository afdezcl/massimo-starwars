import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { throwError } from 'rxjs';
import { Login } from 'src/app/models/auth/login.interface';
import { LoginResponse } from 'src/app/models/auth/loginResponse.interface';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {

  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authServiceMock;
  let routerMock;
  let formBuilderMock;
  let loginForm;
  let compiled;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        FormsModule,
        RouterTestingModule.withRoutes([]),
        ReactiveFormsModule,
        HttpClientModule
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);

    authServiceMock = {
      login: jest.fn()
    };

    routerMock = {
      navigateByUrl: jest.fn()
    };

    formBuilderMock = new FormBuilder();

    component = new LoginComponent(
      formBuilderMock,
      routerMock,
      authServiceMock
    );

    component = fixture.componentInstance;
    fixture.detectChanges();
    loginForm = component.loginForm.controls;
    compiled = fixture.debugElement.nativeElement;
  });


  describe('Test: ngOnInit', () => {
    it('Should initialize component and call initLoginForm', () => {
      const initLoginFormSpy = jest.spyOn(component, 'initLoginForm');
      component.ngOnInit();
      expect(initLoginFormSpy).toHaveBeenCalled();
    });
  });

  describe('Test: loginForm', () => {
    it('Should initialize loginForm', () => {
      const user = {
        email: '',
        password: ''
      };
      expect(component.loginForm.value).toEqual(user);
    });

    it('Should invalidate the form', () => {
      loginForm.email.setValue('');
      loginForm.password.setValue('');
      expect(component.loginForm.valid).toBeFalsy();
      expect(compiled.querySelector('button[type="submit"]').disabled).toBe(true);
    });

    it('Should validate the form', () => {
      loginForm.email.setValue('test@example.com');
      loginForm.password.setValue('P4$$w0rD');
      expect(component.loginForm.valid).toBeTruthy();
      fixture.detectChanges();
      expect(compiled.querySelector('button[type="submit"]').disabled).toBe(false);
    });
  });

  describe('Test: loginUser()', () => {
    it('Should NOT call login of authentication Service', () => {
      loginForm.email.setValue('');
      loginForm.password.setValue('');

      component.loginUser();

      expect(authServiceMock.login).not.toHaveBeenCalled();
    });

    it('Should call login of authentication Service', () => {
      loginForm.email.setValue('example@test.com');
      loginForm.password.setValue('P@$$W0rd');
      const user: Login = {
        email: loginForm.email.value,
        password: loginForm.password.value
      };
      const response: LoginResponse = {
        auth: true,
        token: 'secret'
      };
      const loginUserSpy = jest.spyOn(authServiceMock, 'login').mockReturnValue(response);

      component.loginUser();

      expect(authServiceMock.login(user)).toEqual(response);
      expect(loginUserSpy).toHaveBeenCalledWith(user);
    });

    it('Should call login of authentication Service but with an error response', () => {
      loginForm.email.setValue('example@test.com');
      loginForm.password.setValue('P@$$W0rd');

      const error: HttpErrorResponse = {
        status: 401,
        message: 'You are not logged in'
      } as HttpErrorResponse;

      const handleLoginErrorSpy = jest.spyOn(component, 'handleLoginError');
      jest.spyOn(authServiceMock, 'login').mockReturnValue(throwError(error));

      component.loginUser();
      expect(handleLoginErrorSpy);
    });

  });
});

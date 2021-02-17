
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { throwError } from 'rxjs';
import { Register } from 'src/app/models/auth/register.interface';
import { RegisterComponent } from './register.component';
import { ToastrService } from 'ngx-toastr';

const toastrService = {
  success: (
    message?: string,
    title?: string,
    override?: any
  ) => {},
  error: (
    message?: string,
    title?: string,
    override?: any
  ) => {},
};

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let registerForm;
  let compiled;
  let authServiceMock;
  let routerMock;
  let formBuilderMock;
  let toastMock;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [
        FormsModule,
        RouterTestingModule.withRoutes([]),
        ReactiveFormsModule,
        HttpClientModule
      ],
      providers: [
        { provide: ToastrService, useValue: toastrService }
      ]

    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);

    authServiceMock = {
      register: jest.fn()
    };

    routerMock = {
      navigateByUrl: jest.fn()
    };

    toastMock = toastrService;
    formBuilderMock = new FormBuilder();

    component = new RegisterComponent(
      formBuilderMock,
      routerMock,
      authServiceMock,
      toastMock
    );

    component = fixture.componentInstance;
    fixture.detectChanges();
    registerForm = component.registerForm.controls;
    compiled = fixture.debugElement.nativeElement;

  });

  describe('Test: ngOnInit', () => {
    it('Should be initialized and call createForm', () => {
      fixture.detectChanges();
      expect(fixture).toBeTruthy();
      const initRegisterFormSpy = jest.spyOn(component, 'initRegisterForm');
      component.ngOnInit();
      expect(initRegisterFormSpy).toBeCalled();
    });
  });

  describe('Test: registerForm', () => {
    it('Should initialize registerForm', () => {
      const user = {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      };
      expect(component.registerForm.value).toEqual(user);
    });

    it('Should invalidate the form', () => {
      registerForm.username.setValue('');
      registerForm.email.setValue('');
      registerForm.password.setValue('');
      registerForm.confirmPassword.setValue('');
      expect(component.registerForm.valid).toBeFalsy();
      expect(compiled.querySelector('button[type="submit"]').disabled).toBe(true);
    });

    it('Should validate the form', () => {
      registerForm.username.setValue('example');
      registerForm.email.setValue('test@example.com');
      registerForm.password.setValue('P4$$w0rD');
      registerForm.confirmPassword.setValue('P4$$w0rD');
      expect(component.registerForm.valid).toBeTruthy();
      fixture.detectChanges();
      expect(compiled.querySelector('button[type="submit"]').disabled).toBe(false);
    });
  });

  describe('Test: registerUser()', () => {
    it('Should NOT call register of authentication Service', () => {
      registerForm.username.setValue('');
      registerForm.email.setValue('');
      registerForm.password.setValue('');
      registerForm.confirmPassword.setValue('');

      component.registerUser();

      expect(authServiceMock.register).not.toHaveBeenCalled();
    });

    it('Should call login of authentication Service', () => {
      registerForm.username.setValue('example');
      registerForm.email.setValue('test@example.com');
      registerForm.password.setValue('P4$$w0rD');
      registerForm.confirmPassword.setValue('P4$$w0rD');
      const user: Register = {
        username: registerForm.username.value,
        email: registerForm.email.value,
        password: registerForm.password.value
      };

      const loginUserSpy = jest.spyOn(authServiceMock, 'register').mockReturnValue(true);

      component.registerUser();

      expect(authServiceMock.register(user)).toEqual(true);
      expect(loginUserSpy).toHaveBeenCalledWith(user);
    });

    it('Should call login of authentication Service but with an error response', () => {
      registerForm.username.setValue('example');
      registerForm.email.setValue('test@example.com');
      registerForm.password.setValue('P4$$w0rD');
      registerForm.confirmPassword.setValue('P4$$w0rD');

      const error: HttpErrorResponse = {
        status: 409,
        message: 'User already exists.'
      } as HttpErrorResponse;

      const handleLoginErrorSpy = jest.spyOn(component, 'handleRegisterError');
      jest.spyOn(authServiceMock, 'register').mockReturnValue(throwError(error));

      component.registerUser();

      expect(handleLoginErrorSpy);
    });

  });
});

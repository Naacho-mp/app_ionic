import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginContrasenaPage } from './login-contrasena.page';

describe('LoginContrasenaPage', () => {
  let component: LoginContrasenaPage;
  let fixture: ComponentFixture<LoginContrasenaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginContrasenaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

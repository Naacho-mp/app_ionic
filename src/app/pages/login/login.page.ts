import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiServiceLogin } from '../../services/api.service-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage {
  private loginService = inject(ApiServiceLogin);
  private router = inject(Router);

  email_contacto: string = '';
  password: string = '';
  errorMessage: string = '';
  isLoading: boolean = false;

  onLogin() {
    this.errorMessage = '';
    this.isLoading = true;

    this.loginService.login(this.email_contacto, this.password).subscribe({
      next: (response) => {
        this.isLoading = false;

        if (response.primer_login) {
          //Si es el primer login del cliente, te redirige a la pestaña para cambiar la password
          this.router.navigate(['/cambiar-password']);
        } else {
          //sino, si ya es tu segunda vez iniciando sesion, te redirige al home
          this.router.navigate(['/home']);
        }
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = error.error?.detail || 'Error al iniciar sesión';
      }
    });
  }
}


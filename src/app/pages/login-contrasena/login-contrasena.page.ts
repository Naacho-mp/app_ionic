import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { ApiServiceLogin, CambiarPasswordData, RegistroCliente } from '../../services/api.service-login';


@Component({
  selector: 'app-login-contrasena',
  templateUrl: './login-contrasena.page.html',
  styleUrls: ['./login-contrasena.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule ],
})
export class LoginContrasenaPage implements OnInit {

  private apiService = inject(ApiServiceLogin);
  private router = inject(Router);

  cliente: RegistroCliente | null = null;

  passwordActual: string = '';
  passwordNueva: string = '';
  confirmarPassword: string = '';

  errorMessage: string = '';
  successMessage: string = '';
  isLoading: boolean = false;

  ngOnInit() {
    this.cliente = this.apiService.getClienteActual();
  }

  cambiarPassword() {
    this.errorMessage = '';
    this.successMessage = '';

    //verificar que se rellenen todos los campos
    if (!this.passwordActual || !this.passwordNueva || !this.confirmarPassword) {
      this.errorMessage = 'Todos los campos son obligatorios.';
      return;
    }
    //Por si las contraseñas no coniciden se verifica
    if (this.passwordNueva !== this.confirmarPassword) {
      this.errorMessage = 'La nueva contraseña y la confirmación no coinciden.';
      return;
    }
    //si no se obtiene el cliente
    if (!this.cliente) {
      this.errorMessage = 'No se pudo obtener el usuario.';
      return;
    }

    //se crea un objeto segun la export interface en el servicio, con los datos que ingresa el cliente para crear
    //su nueva contraseña
    const data: CambiarPasswordData = {
      email_contacto: this.cliente.email_contacto,
      password_actual: this.passwordActual,
      password_nueva: this.passwordNueva,
      confirmar_password: this.confirmarPassword
    };

    this.isLoading = true;

    this.apiService.cambiarPassword(data).subscribe({
      next: (res) => {
        this.isLoading = false;
        this.successMessage = 'Contraseña cambiada correctamente.';
        //redirigir al home
        this.router.navigate(['/home']);
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = err.error?.detail || 'Error al cambiar la contraseña.';
      }
    });
  }

}


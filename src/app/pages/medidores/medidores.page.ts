import { Component, inject, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiServiceMedidores, RegistroMedidor } from '../../services/api.service-medidores';
import { ApiServiceLogin } from '../../services/api.service-login';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-medidores',
  templateUrl: './medidores.page.html',
  styleUrls: ['./medidores.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class MedidoresPage implements OnInit {
  private medidoresService = inject(ApiServiceMedidores);
  private loginService = inject(ApiServiceLogin);

  medidores: RegistroMedidor[] = [];
  isLoading = false;
  errorMessage = '';

  ngOnInit() {
    this.cargarMedidores();
  }

  cargarMedidores() {
    const cliente = this.loginService.getClienteActual();

    if (!cliente) {
      this.errorMessage = 'No hay cliente logueado';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    this.medidoresService.obtenerMisMedidores(cliente.id_cliente).subscribe({
      next: (data) => {
        this.medidores = data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error al cargar medidores:', error);
        this.errorMessage = 'Error al cargar los medidores';
        this.isLoading = false;
      }
    });
  }
}

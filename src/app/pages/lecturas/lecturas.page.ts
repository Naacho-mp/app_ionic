import { Component, inject, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiServiceLecturas, RegistroLectura } from '../../services/api.service-lecturas';
import { ApiServiceLogin } from '../../services/api.service-login';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-lecturas',
  templateUrl: './lecturas.page.html',
  styleUrls: ['./lecturas.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class LecturasPage implements OnInit {
  private lecturasService = inject(ApiServiceLecturas);
  private loginService = inject(ApiServiceLogin);

  lecturas: RegistroLectura[] = [];
  isLoading = false;
  errorMessage = '';

  meses = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  ngOnInit() {
    this.cargarLecturas();
  }

  cargarLecturas() {
    const cliente = this.loginService.getClienteActual();

    if (!cliente) {
      this.errorMessage = 'No hay cliente logueado';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    this.lecturasService.obtenerMisLecturas(cliente.id_cliente).subscribe({
      next: (data) => {
        this.lecturas = data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error al cargar lecturas:', error);
        this.errorMessage = 'Error al cargar las lecturas';
        this.isLoading = false;
      }
    });
  }

  nombreMes(mes: number): string {
    return this.meses[mes - 1] || '';
  }
}

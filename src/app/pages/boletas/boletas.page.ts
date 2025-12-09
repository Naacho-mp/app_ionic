import { Component, OnInit, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {RouterLink} from '@angular/router';
import { ApiServiceBoleta, Boleta } from '../../services/api.service-boletas';
import { ApiServiceLogin } from '../../services/api.service-login';

@Component({
  selector: 'app-boletas',
  templateUrl: './boletas.page.html',
  styleUrls: ['./boletas.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink],
})
export class BoletasPage implements OnInit {

  private boletaService = inject(ApiServiceBoleta);
  private loginService = inject(ApiServiceLogin);

  // datos para la boleta
  boletas: Boleta[] = [];

  // filtros para la boleta
  anio: number | null = null;
  mes: number | null = null;

  // estado
  isLoading = false;
  errorMessage = '';

  meses = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  ngOnInit() {
  }

  buscarBoletas() {
    const cliente = this.loginService.getClienteActual();

    if (!cliente) {
      this.errorMessage = 'No hay cliente logueado';
      return;
    }

    if (!this.anio || !this.mes) {
      this.errorMessage = 'Debe seleccionar mes y año';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';
    this.boletas = [];

    this.boletaService.listarBoletas(cliente.rut, this.anio, this.mes).subscribe({
      next: (data) => {
        this.boletas = data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error al cargar boletas:', error);
        this.errorMessage = 'Error al cargar las boletas';
        this.isLoading = false;
      }
    });
  }

  descargarPDF(boleta: Boleta) {
    this.boletaService.descargarBoletaPDF(boleta.id_cliente, boleta.anio, boleta.mes)
      .subscribe({
        next: (blob) => {
          const url = window.URL.createObjectURL(blob);
          window.open(url, '_blank');
        },
        error: (err) => {
          console.error('Error al descargar boleta PDF:', err);
          this.errorMessage = 'No se pudo descargar el PDF';
        }
      });
  }

  nombreMes(m: number): string {
    return this.meses[m - 1] || '';
  }

}

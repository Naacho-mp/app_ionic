import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

// INTERFAZ DE BOLETA
export interface Boleta {
  id_boleta: string;
  id_cliente: string;
  anio: number;
  mes: number;
  kwh_total: number;
  tarifa_base: number;
  cargos: number;
  iva: number;
  total_pagar: number;
  estado: string;
}

@Injectable({
  providedIn: 'root',
})
export class ApiServiceBoleta {

  private http = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl;

  // LISTAR BOLETAS (FILTRAR POR CLIENTE + AÑO + MES)
  listarBoletas(id_cliente: string, anio?: number, mes?: number): Observable<Boleta[]> {
    let params = new HttpParams().set('rut', id_cliente);

    if (anio !== undefined) params = params.set('anio', anio);
    if (mes !== undefined) params = params.set('mes', mes);

    return this.http.get<Boleta[]>(`${this.apiUrl}/boletas`, { params });
  }

  // DESCARGAR PDF
  descargarBoletaPDF(id_cliente: string, anio: number, mes: number): Observable<Blob> {
    const url = `${this.apiUrl}/boletas/boleta/${id_cliente}/${anio}/${mes}/pdf`;
    return this.http.get(url, { responseType: 'blob' });
  }
}

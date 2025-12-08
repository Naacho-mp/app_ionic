import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface RegistroMedidor {
  id_medidor: number;
  codigo_medidor: string;
  id_cliente: string;
  rut: string;
  direccion_suministro: string;
  latitud: number;
  longitud: number;
  estado: string;
  created_at?: string;
  updated_at?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ApiServiceMedidores {
  private http = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl;

  obtenerMisMedidores(id_cliente: string): Observable<RegistroMedidor[]> {
    return this.http.get<RegistroMedidor[]>(`${this.apiUrl}/medidores/cliente/${id_cliente}`);
  }
}

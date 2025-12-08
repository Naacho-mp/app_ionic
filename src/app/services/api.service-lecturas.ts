import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface RegistroLectura {
  id_lectura: number;
  id_medidor: number;
  codigo_medidor: string;
  anio: number;
  mes: number;
  lectura_kwh: number;
  observacion?: string;
  created_at?: string;
  updated_at?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ApiServiceLecturas {
  private http = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl;


  obtenerMisLecturas(id_cliente: string): Observable<RegistroLectura[]> {
    const params = new HttpParams().set('id_cliente', id_cliente);
    return this.http.get<RegistroLectura[]>(`${this.apiUrl}/lecturas/mis-lecturas`, { params });
  }
}

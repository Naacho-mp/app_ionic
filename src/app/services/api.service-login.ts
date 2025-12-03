import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

export interface RegistroCliente {
  id_cliente: string;
  rut: string;
  nombre_razon: string;
  email_contacto: string;
  telefono: string;
  direccion_facturacion: string;
  estado: string;
  primer_login: boolean;
}

export interface LoginResponse {
  message: string;
  cliente: RegistroCliente;
  primer_login: boolean;
}

export interface CambiarPasswordData {
  email_contacto: string;
  password_actual: string;
  password_nueva: string;
  confirmar_password: string;
}

@Injectable({
  providedIn: 'root',
})
export class ApiServiceLogin {
  private http = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl;

  login(email_contacto: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/clientes/login`, {
      email_contacto, password
    }).pipe(
      tap(response => {
        localStorage.setItem('cliente', JSON.stringify(response.cliente));
        localStorage.setItem('primer_login', String(response.primer_login));
      })
    );
  }

  cambiarPassword(data: CambiarPasswordData): Observable<any> {
    return this.http.post(`${this.apiUrl}/clientes/cambiar-password`, data);
  }

  getClienteActual(): RegistroCliente | null {
    const clienteStr = localStorage.getItem('cliente');
    return clienteStr ? JSON.parse(clienteStr) : null;
  }

  logout(): void {
    localStorage.removeItem('cliente');
    localStorage.removeItem('primer_login');
  }

}

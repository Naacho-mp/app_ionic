import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ApiServiceLogin, RegistroCliente } from '../../services/api.service-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class HomePage implements OnInit {

  private apiService = inject(ApiServiceLogin);
  private router = inject(Router);

  cliente: RegistroCliente | null = null;

  ngOnInit() {
    this.cliente = this.apiService.getClienteActual();
  }

  logout() {
    this.apiService.logout();
    this.router.navigate(['/login']);
  }

}


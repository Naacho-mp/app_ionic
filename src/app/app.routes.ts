import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'cambiar-password',
    loadComponent: () => import('./pages/login-contrasena/login-contrasena.page').then(m => m.LoginContrasenaPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then(m => m.HomePage)
  },
  {
    path: 'medidores',
    loadComponent: () => import('./pages/medidores/medidores.page').then(m => m.MedidoresPage)
  },
  {
    path: 'lecturas',
    loadComponent: () => import('./pages/lecturas/lecturas.page').then(m => m.LecturasPage)
  },
  {
    path: 'boletas',
    loadComponent: () => import('./pages/boletas/boletas.page').then( m => m.BoletasPage)
  },
]

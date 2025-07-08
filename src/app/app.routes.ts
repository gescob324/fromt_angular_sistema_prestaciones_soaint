import { Routes } from '@angular/router';
import LoginComponent from './authentication/login/login.component';

export const routes: Routes = [
    
    
    {
        path: '',
        component: LoginComponent
        
    },
    {
                path:'dashboard',
                loadComponent: ()=> import ('./pages/dashboard/dashboard.component')
    },
    {
                path:'visualizacion-empleados',
                loadComponent: ()=> import ('./pages/visualizacion-empleados/visualizacion-empleados.component')
    },
    {
                path:'crear-empleado',
                loadComponent: () => import('./pages/crear-empleado/crear-empleado.component')
    },
    {
                path:'visualizacion-prestaciones',
                loadComponent: () => import('./pages/visualizacion-prestaciones/visualizacion-prestaciones.component')
    }
   
  
        
]; 

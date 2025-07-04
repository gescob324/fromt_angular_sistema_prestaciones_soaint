import { Routes } from '@angular/router';
import LoginComponent from './pages/login/login.component';
import DashboardComponent from './pages/dashboard/dashboard.component';
import { VisualizacionEmpleadosComponent } from './pages/visualizacion-empleados/visualizacion-empleados.component';
import { CrearEmpleadoComponent } from './pages/crear-empleado/crear-empleado.component';
import { VisualizacionPrestacionesComponent } from './pages/visualizacion-prestaciones/visualizacion-prestaciones.component';

export const routes: Routes = [
    
    
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path:'login',
        component: LoginComponent
    },
    {
        path:'dashboard',
        component: DashboardComponent
    },
    {
        path:'visualizacion-empleados',
        component: VisualizacionEmpleadosComponent
    },
    {
        path:'crear-empleado',
        component: CrearEmpleadoComponent
    },
    {
        path:'visualizacion-prestaciones',
        component: VisualizacionPrestacionesComponent
    }

        
]; 

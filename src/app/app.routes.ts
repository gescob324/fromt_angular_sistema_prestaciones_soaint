import { Routes } from '@angular/router';

export const routes: Routes = [
    {       
        path:'login',
        loadComponent: ()=> import ('./bussines/authentication/login/login.component')
    }

]; 

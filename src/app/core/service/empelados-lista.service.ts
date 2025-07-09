import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleados } from '../../model/empleados';

@Injectable({
  providedIn: 'root'
})
export class EmpeladosListaService {

  private apilistaempleados: string = 'http://localhost:5050/prestaciones/api/v1/empleados';
  
  constructor(private httpclient:HttpClient) { }

  getempleadoslista():Observable<Empleados []>{
    return this.httpclient.get<Empleados[]>(this.apilistaempleados)
  }
}

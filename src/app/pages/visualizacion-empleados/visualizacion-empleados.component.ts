import { Component, inject, OnInit } from '@angular/core';
import { Empleados } from '../../model/empleados';
import { EmpeladosListaService } from '../../core/service/empelados-lista.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/service/auth.service';

@Component({
  selector: 'app-visualizacion-empleados',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './visualizacion-empleados.component.html',
  styleUrl: './visualizacion-empleados.component.css'
})
export default class VisualizacionPrestacionesComponent implements OnInit {
  private tokenkey = 'authToken'  

  empleados : Empleados [] = [];

  constructor(private empleadoslistaService: EmpeladosListaService){}
  
  authservice = inject(AuthService)
  
  ngOnInit(): void {
    this.listaEmpleados();
  }
  
  
  
    
  listaEmpleados(){
    this.empleadoslistaService.getempleadoslista().subscribe(
      data => {
        this.empleados = data;
        console.log(this.empleados)
      }
    )
  }
  
}

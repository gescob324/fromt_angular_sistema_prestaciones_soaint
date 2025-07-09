import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent {
emailOrCi: string = '';
password: string = '';

constructor(private authservice: AuthService, private router:Router){

}

login(): void{
  this.authservice.login(this.emailOrCi, this.password).subscribe({
    next: (response)=> this.router.navigate(['visualizacion-empleados']),
    error: (err) => console.error('la puta madre')
  })
}

}

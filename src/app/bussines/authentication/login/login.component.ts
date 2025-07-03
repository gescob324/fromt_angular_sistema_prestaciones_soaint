import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { error } from 'console';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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

  constructor(private AtuhService: AuthService, private router: Router){

  }

  login(): void{
    this.AtuhService.login(this.emailOrCi,this.password).subscribe({
      next: ()=> this.router.navigate(['/dasboard']),
      error: (err) => console.error('login failed', err)
    })
  }

}

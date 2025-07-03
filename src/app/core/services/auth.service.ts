import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private LOGIN_URL = 'http://localhost:5050/prestaciones/api/v1/auth/login';
  private tokenKey = 'authToken';

  constructor(private httpClient:HttpClient, private router:Router) { }

  login(emailOrCi: string, password:string): Observable<any>{
    return this.httpClient.post<any>(this.LOGIN_URL, {emailOrCi, password}).pipe(
      tap(response=>{
        if(response.token){
          console.log(response.token)
          this.setToken(response.token)
        }
      })
    )
  }

  private setToken(token:string): void{
    localStorage.setItem(this.tokenKey, token)
  }

  private getToken(): string | null {
    return localStorage.getItem(this.tokenKey)
  }

  isAuthenticated(): Boolean{
    const token = this.getToken();
    if(!token){
      return false
    }

    const payload = JSON.parse(atob(token.split('.')[1]));
    const exp = payload.exp * 1000;
    return Date.now() < exp;
  }

  logout(): void{
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login'])
  }
}

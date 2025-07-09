import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  getToekn() {
    throw new Error('Method not implemented.');
  }
  private LOGIN_URL = 'http://localhost:5050/prestaciones/api/v1/auth/login';
  private tokenkey = 'authToken'

    constructor(private httpclient:HttpClient, private router:Router) {

    }

    login(emailOrCi: string, password: string): Observable<any>{
      return this.httpclient.post<any>(this.LOGIN_URL, {emailOrCi, password}).pipe(
        tap(response =>{
          if(response.token){
            console.log(response.token);
            this.setToken(response.token)
          }
        })
      )
     
    }

    private setToken(token: string): void{
      localStorage.setItem(this.tokenkey, token);
    }

    private getToken(): string | null {
      return localStorage.getItem(this.tokenkey)
    }

    isAuthenticated(): boolean{
      const token =this.getToken();
      if(!token){
        return false;
      }

      const payload = JSON.parse(atob(token.split('.')[1]));
      const exp= payload.exp *1000;
      return Date.now()< exp; 
    }

    logout(): void{
      localStorage.removeItem(this.tokenkey);
      this.router.navigate(['login'])
    }

 
}

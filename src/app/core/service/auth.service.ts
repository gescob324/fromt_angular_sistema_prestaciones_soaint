import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { time } from 'console';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private LOGIN_URL = 'http://localhost:5050/prestaciones/api/v1/auth/login';
  private tokenkey = 'authToken'  
  private RefreshTokenkey = 'refreshToken'


    constructor(private httpclient:HttpClient, private router:Router) {

    }

    login(emailOrCi: string, password: string): Observable<any>{
      return this.httpclient.post<any>(this.LOGIN_URL, {emailOrCi, password}).pipe(
        tap(response =>{
          if(response.token){
            console.log(response.token);
            this.setToken(response.token)
            this.setRefreshToken(response.refreshToken)
            this.autoRefreshToken
            console.log(response.refreshToken)
          }
        })
      )
     
    }

     setToken(token: string): void{
      localStorage.setItem(this.tokenkey, token);
    }


     getToken(): string | null {
      if(typeof window !=='undefined'){
        return localStorage.getItem(this.tokenkey)
      }else{
        return null;
      }
    }

   setRefreshToken(token: string): void{
      localStorage.setItem(this.RefreshTokenkey, token);
    }


     getRefreshToken(): string | null {
      if(typeof window !=='undefined'){
        return localStorage.getItem(this.RefreshTokenkey)
      }else{
        return null;
      }
    }

    refresToken(): Observable<any>{
      const refreshToken = this.getRefreshToken
      return this.httpclient.post<any>(this.LOGIN_URL, {refreshToken}).pipe(
        tap(response =>{
          if(response.token){
            console.log(response.token);
            this.setToken(response.token)
            this.setRefreshToken(response.refreshToken)
            this.autoRefreshToken
          }
        })
      )
     
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


    autoRefreshToken(): void{
       const token =this.getToken();
      if(!token){
        return;
      }

      const payload = JSON.parse(atob(token.split('.')[1]));
      const exp= payload.exp *1000;

      const timeout = exp - Date.now() - (60 * 1000)

      setTimeout(() => {
          this.refresToken().subscribe()
      },timeout)
    }

    logout(): void{
      localStorage.removeItem(this.tokenkey);
      localStorage.removeItem(this.RefreshTokenkey);
      this.router.navigate(['login'])
    }

 
}

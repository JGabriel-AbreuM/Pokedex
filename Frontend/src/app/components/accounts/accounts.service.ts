import { LoginResponse } from './login.response.model';
import { Login } from './login.model';
import { User } from './register.model';
import { Observable } from 'rxjs';
import { Otp } from './otp.model';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterResponseModel } from './register.model';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  baseUrl = "http://127.0.0.1:8000/api/"
  constructor(private http: HttpClient) { }

  // OTP
  create(otp: Otp): Observable<Otp[]> {
    return this.http.post<Otp[]>(this.baseUrl+"otp/", otp)
  }

  // Registro
  register(user: User): Observable<RegisterResponseModel> {
    return this.http.post<RegisterResponseModel>(this.baseUrl+"register/", user)
  }
  
  // Login
  login(user: Login): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.baseUrl+"login/", user)
  }
}

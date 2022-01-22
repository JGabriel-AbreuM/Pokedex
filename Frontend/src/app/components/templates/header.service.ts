import { UserModel } from './header.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './../accounts/register.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  baseUrl = "http://127.0.0.1:8000/api/"

  constructor(private http: HttpClient) { }

  private _getToken(): string | null {
    return sessionStorage.getItem('token');
  }

  getUser():  Observable<UserModel> {
    const token = this._getToken();
    const httpHeaders = new HttpHeaders(
      {'Content-Type': 'application/json',
      'Authorization': 'token ' + token},
    );

    console.log("GetUser " + token)
    console.log(this.http.get<UserModel>(
      this.baseUrl+"user/",
    ))
    return this.http.get<UserModel>(
      this.baseUrl+"user/", { headers: httpHeaders }
    )
  }

  logout(): Observable<any> {
    const token = this._getToken();
    const httpHeaders = new HttpHeaders(
      {'Content-Type': 'application/json',
      'Authorization': 'token ' + token},
    );
    return this.http.post(
      this.baseUrl+'logout/', { headers: httpHeaders }
    );
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BuyerService {

  constructor(private _http: HttpClient, private _router: Router) {}

  doLogin(obj: any) {
    return this._http.post<any>(
      'http://localhost:3000/api/buyer/loginauth',
      obj
    );
  }

  isLoggedIn() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }
  logout() {
    this._router.navigate(['/']);
    localStorage.removeItem('token');
  }
}
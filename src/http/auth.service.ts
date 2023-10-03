import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser, IUserResponse } from 'src/app/login/models/auth.interface';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router, private http: HttpClient) {}

  /**
   * Login
   * @summary login
   * @param user: IUser
   * @returns Observable<void>IUserResponse
   */
  login(user: IUser) {
    const url = `${environment.apiUrl}auth/login`;
    return this.http.post<any>(url, user)
      .pipe((userResp) => userResp);
  }

  /**
   * Logout
   * @summary logout
   * @returns Observable<void>
   */
  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('user');
    this.router.navigate(['/account/login']);
  }

}

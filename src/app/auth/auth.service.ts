import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  setToken()
  // tslint:disable-next-line: one-line
  {
    // tslint:disable-next-line: max-line-length
    localStorage.setItem('token', 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTU3MzcxODU0M30.rj7wde2UzwQjafa-cosXyWxepP6jLsx6VgHHlw8V7K32N2ExwvTXLZ-JegukMbDbFJkWNe9V9_P7Y7Ao6qdxrw');
  }
  getToken(): string
  // tslint:disable-next-line: one-line
  {
    return localStorage.getItem('token');
  }

  /* public isAuthenticated(): boolean {
    // get the token
    const token = this.getToken();
    // return a boolean reflecting
    // whether or not the token is expired
    return tokenNotExpired(null, token);
  } */
}

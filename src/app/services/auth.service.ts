import { Token } from './../models/token';
import { SingleResponseModel } from './../models/singleResponseModel';
import { Login } from './../models/login';
import { Contact } from './../models/contact';
import { ListResponseModel } from './../models/listResponseModel';
import { ResponseModel } from './../models/responseModel';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = 'https://localhost:44397/api/auth/';

  constructor(private httpClient: HttpClient) {}

  login(loginModel: Login): Observable<SingleResponseModel<Token>> {
    return this.httpClient.post<SingleResponseModel<Token>>(
      this.apiUrl + 'login',
      loginModel
    );
  }
}

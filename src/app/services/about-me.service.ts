import { SingleResponseModel } from './../models/singleResponseModel';
import { ResponseModel } from './../models/responseModel';
import { AboutMe } from './../models/aboutMe';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AboutMeService {
  apiUrl = 'https://localhost:44397/api/aboutMe/';

  constructor(private httpClient: HttpClient) {}

  add(aboutMe: any): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'add', aboutMe);
  }

  delete(aboutMe: AboutMe): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'delete', aboutMe);
  }

  get(): Observable<SingleResponseModel<AboutMe>> {
    return this.httpClient.get<SingleResponseModel<AboutMe>>(
      this.apiUrl + 'get'
    );
  }

  update(aboutMe: AboutMe): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'update', aboutMe);
  }
}

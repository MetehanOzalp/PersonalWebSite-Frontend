import { Experience } from './../models/experience';
import { ListResponseModel } from './../models/listResponseModel';
import { ResponseModel } from './../models/responseModel';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  apiUrl = 'https://localhost:44397/api/experiences/';

  constructor(private httpClient: HttpClient) {}

  add(experience: Experience): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'add', experience);
  }

  delete(experience: Experience): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      this.apiUrl + 'delete',
      experience
    );
  }

  getAll(): Observable<ListResponseModel<Experience>> {
    return this.httpClient.get<ListResponseModel<Experience>>(
      this.apiUrl + 'getAll'
    );
  }

  update(experience: Experience): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      this.apiUrl + 'update',
      experience
    );
  }
}

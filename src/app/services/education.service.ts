import { Education } from './../models/education';
import { Experience } from './../models/experience';
import { ListResponseModel } from './../models/listResponseModel';
import { ResponseModel } from './../models/responseModel';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EducationService {
  apiUrl = 'https://localhost:44397/api/educations/';

  constructor(private httpClient: HttpClient) {}

  add(education: Education): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'add', education);
  }

  delete(education: Education): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      this.apiUrl + 'delete',
      education
    );
  }

  getAll(): Observable<ListResponseModel<Education>> {
    return this.httpClient.get<ListResponseModel<Education>>(
      this.apiUrl + 'getAll'
    );
  }

  update(education: Education): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      this.apiUrl + 'update',
      education
    );
  }
}

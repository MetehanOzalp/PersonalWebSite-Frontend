import { ListResponseModel } from './../models/listResponseModel';
import { Skill } from './../models/skill';
import { ResponseModel } from './../models/responseModel';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SkillService {
  apiUrl = 'https://localhost:44397/api/skills/';

  constructor(private httpClient: HttpClient) {}

  add(skill: Skill): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'add', skill);
  }

  delete(skill: Skill): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'delete', skill);
  }

  getAll(): Observable<ListResponseModel<Skill>> {
    return this.httpClient.get<ListResponseModel<Skill>>(
      this.apiUrl + 'getAll'
    );
  }

  update(skill: Skill): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'update', skill);
  }
}

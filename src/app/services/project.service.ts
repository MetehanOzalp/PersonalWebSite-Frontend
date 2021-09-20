import { Project } from './../models/project';
import { ListResponseModel } from './../models/listResponseModel';
import { Skill } from './../models/skill';
import { SingleResponseModel } from './../models/singleResponseModel';
import { ResponseModel } from './../models/responseModel';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  apiUrl = 'https://localhost:44397/api/projects/';

  constructor(private httpClient: HttpClient) {}

  add(project: Project): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'add', project);
  }

  delete(project: Project): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'delete', project);
  }

  getAll(): Observable<ListResponseModel<Project>> {
    return this.httpClient.get<ListResponseModel<Project>>(
      this.apiUrl + 'getAll'
    );
  }

  update(project: Project): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'update', project);
  }
}

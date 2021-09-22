import { Contact } from './../models/contact';
import { ListResponseModel } from './../models/listResponseModel';
import { ResponseModel } from './../models/responseModel';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  apiUrl = 'https://localhost:44397/api/contacts/';

  constructor(private httpClient: HttpClient) {}

  add(contact: Contact): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'add', contact);
  }

  changeStatus(contact: Contact): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      this.apiUrl + 'changeStatus',
      contact
    );
  }

  delete(contact: Contact): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'delete', contact);
  }

  getAll(): Observable<ListResponseModel<Contact>> {
    return this.httpClient.get<ListResponseModel<Contact>>(
      this.apiUrl + 'getAll'
    );
  }

  getReadMessage(): Observable<ListResponseModel<Contact>> {
    return this.httpClient.get<ListResponseModel<Contact>>(
      this.apiUrl + 'getReadMessages'
    );
  }

  getUnreadMessage(): Observable<ListResponseModel<Contact>> {
    return this.httpClient.get<ListResponseModel<Contact>>(
      this.apiUrl + 'getUnreadMessages'
    );
  }
}

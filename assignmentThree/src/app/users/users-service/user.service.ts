import { Users } from './../model-interface/model';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiLink: string = 'https://reqres.in/api/users';
  subjectData: Subject<any> = new Subject<any>();
  DataObservable: Observable<any> = this.subjectData.asObservable();

  constructor(private http: HttpClient) {}

  getAll(page: number, perPage: number): Observable<Users[]> {
    let params = new HttpParams();
    params = params.append('page', page);
    params = params.append('per_page', perPage);
    return this.http.get<Users[]>(`${this.apiLink}`, {
      headers: new HttpHeaders({ 'content-type': 'application/json' }),
      observe: 'body',
      params: params,
    });
  }

  getByID(id: number): Observable<Users> {
    return this.http.get<Users>(`${this.apiLink}/${id}`);
  }

  add(newUser: Users): Observable<Users> {
    return this.http.post<Users>(this.apiLink, newUser, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
      }),
    });
  }

  update(id: number, user: Users): Observable<any> {
    return this.http.put(`${this.apiLink}/${id}`, user, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
      }),
    });
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiLink}/${id}`);
  }

  sendData(value: any): void {
    this.subjectData.next(value);
  }

  getData(): Observable<any> {
    return this.DataObservable;
  }
}

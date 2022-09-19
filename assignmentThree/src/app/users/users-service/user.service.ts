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

  update(user: Users): Observable<Users> {
    return this.http.put<Users>(`${this.apiLink}/${user.id}`, user, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
      }),
    });
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiLink}/${id}`);
  }
  // Methods to set and get user details and display it in details Component
  sendData(user: Users): void {
    this.subjectData.next(user);
  }

  getData(): Observable<any> {
    return this.DataObservable;
  }
}

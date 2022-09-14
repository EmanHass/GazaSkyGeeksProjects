import { Users } from './../model-interface/model';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {
  apiLink: string = 'https://reqres.in/api/users';
  subjectData: Subject<any>= new Subject<any>();
  DataObservable: Observable<any> = this.subjectData.asObservable();
  
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.getAll()
  }

  getAll(): Observable<Users[]>{
    return this.http.get<Users[]>(this.apiLink,
      {headers: new HttpHeaders({'content-type': 'application/json'}),
       observe:'body'})
  }

  getByID(id:number): Observable<Users>{
      return this.http.get<Users>(`${this.apiLink}/${id}`);
  }

  add(newUser: Users): Observable<Users>{
      return this.http.post<Users>(this.apiLink, newUser,{
        headers: new HttpHeaders({
          'content-type':'application/json'
        })
      })
  }

  update():void{

  }

  delete(id:number): Observable<any>{
   return  this.http.delete(`${this.apiLink}/${id}`);
  }

  sendData(value: any): void{
    this.subjectData.next(value)
  }

  getData(): Observable<any>{
    return this.DataObservable;
  }
}

import { Injectable } from '@angular/core';
import { User } from '../users-interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: User[]=[
    {id:'1',name:{firstName:'Eman', lastName:'Hassouna'},birthDate:'22/10/2000',email:'eman@hotmail.com',phone:'0599999999', address:'Gaza'},
    {id:'2',name:{firstName:'Eman', lastName:'Hassouna'},birthDate:'22/10/2000',email:'eman@hotmail.com',phone:'0599999999', address:'Gaza'},
    {id:'3',name:{firstName:'Eman', lastName:'Hassouna'},birthDate:'22/10/2000',email:'eman@hotmail.com',phone:'0599999999', address:'Gaza'},
    {id:'4',name:{firstName:'Eman', lastName:'Hassouna'},birthDate:'22/10/2000',email:'eman@hotmail.com',phone:'0599999999', address:'Gaza'},
    {id:'5',name:{firstName:'Eman', lastName:'Hassouna'},birthDate:'22/10/2000',email:'eman@hotmail.com',phone:'0599999999', address:'Gaza'}
  ];
  constructor() { }

  getUsers(): any{
    return this.users;
  }
  getUserById(): any{
    return 
  }
  addUser(): any{
    return 
  }
  updateUser(): any{
    return 
  }
  removeUser(): any{
    return 
  }

}

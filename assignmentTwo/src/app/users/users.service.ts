import { Injectable } from '@angular/core';
import { User } from '../interfaces/users-interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users: User[] = [
    {
      id: '1',
      name: { firstName: 'Eman', lastName: 'Hassouna' },
      birthDate: '7/7/2000',
      email: 'eman@hotmail.com',
      phone: '0591234567',
      address: 'Gaza',
    },
    {
      id: '2',
      name: { firstName: 'Hala', lastName: 'Hassouna' },
      birthDate: '1/1/1959',
      email: 'hala@hotmail.com',
      phone: '0599632587',
      address: 'Gaza',
    },
    {
      id: '3',
      name: { firstName: 'Heba', lastName: 'Hassouna' },
      birthDate: '1/10/1994',
      email: 'heba@hotmail.com',
      phone: '0591472583',
      address: 'Gaza',
    },
    {
      id: '4',
      name: { firstName: 'Shrooq', lastName: 'Hassouna' },
      birthDate: '2/9/1997',
      email: 'shrooq@hotmail.com',
      phone: '0598521473',
      address: 'Gaza',
    },
    {
      id: '5',
      name: { firstName: 'shahed', lastName: 'Hassouna' },
      birthDate: '14/8/1990',
      email: 'shahed@hotmail.com',
      phone: '0597893214',
      address: 'Gaza',
    },
  ];
  constructor() {}

  getUsers(): User[] {
    return this.users;
  }
  getUserById(id: string): User {
    return this.users.find(val => val.id === id);
  }

  addUser(values: User): void {
    this.users.push(values);
  }
  updateUser(id: string, updatedUser: User): void {
    this.users = this.users.map(val => {
      if (val.id == id) {
        return (val = updatedUser);
      } else return val;
    });
  }

  removeUser(id: string): User[] {
    return this.users = this.users.filter(val => val.id !== id);
  }
}

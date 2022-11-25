import { Role } from 'src/app/shared-modules/models/enums/role.enum';
import { User } from 'src/app/shared-modules/models/user.model';
import { Injectable } from '@angular/core';

@Injectable()
export class UserserviceService {
  users:User[]=[{
    id: 1,
    firstName: 'Eman',
    lastName: 'Hassouna',
    email: 'eman@gmail.com',
    role: Role.JOBSEEKER
  },
{
    id: 2,
    firstName: 'Akrm',
    lastName: 'Hassouna',
    email: 'Akrm@gmail.com',
    role: Role.INTERVIEWER
  }
];
  constructor() { }

  getUsers(): User[]{
    return this.users;
  }
  addUser(user:User): void{
    this.users.push(user);
  }
  getUserById(id: number): User {
    return this.users.find(val => val.id === id);
  }
  updateUser(id: number, updatedUser: User): void {
    this.users = this.users.map(val => {
      if (val.id == id) {
        return (val = updatedUser);
      } else return val;
    });
  }
  removeUser(id: number): User[] {
    return this.users = this.users.filter(val => val.id !== id);
  }
}

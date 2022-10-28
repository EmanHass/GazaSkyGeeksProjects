import { User } from './../../shared-modules/models/user.model';
import { Injectable } from '@angular/core';
import { Role } from 'src/app/shared-modules/models/enums/role.enum';

@Injectable()
export class UserService {
  user: User={
    id: 1,
    firstName: 'Eman',
    lastName: 'Hassouna',
    email: 'eman@gmail.com',
    role: Role.JOBSEEKER
  };
  constructor() { }

  getUser(): User{    
    return this.user;
  }

  UpdateUser(newData: User):void{
    this.user=newData
  }
}

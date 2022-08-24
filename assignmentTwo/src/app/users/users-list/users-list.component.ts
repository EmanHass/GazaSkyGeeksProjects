import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users:any[]=[];
  id:string='';
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.users=this.usersService.getUsers();
  }
  remove(idRemove: string):void{
    this.usersService.removeUser(idRemove);
    this.users=this.usersService.getUsers();
  }
  
}

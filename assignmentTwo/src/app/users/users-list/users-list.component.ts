import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users:any[]=[];
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.users=this.usersService.getUsers();
  }
  remove(idRemove: string):void{
    this.users=this.usersService.removeUser(idRemove);
  } 
}

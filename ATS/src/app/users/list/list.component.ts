import { User } from 'src/app/shared-modules/models/user.model';
import { UserserviceService } from './../users-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list: User[];
  constructor(private userservice: UserserviceService) { }

  ngOnInit(): void {
    this.list = this.userservice.getUsers();
  }

  remove(idRemove: number):void{
    this.list=this.userservice.removeUser(idRemove); 
  }

}

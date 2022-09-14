import { UserService } from './../../users-service/user.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Users } from '../../model-interface/model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  userDetaile: Users;
  constructor(private usersService:UserService) { }

  ngOnInit(): void {
    this.usersService.getData().subscribe(
      res=> this.userDetaile=res
    )
  }


}

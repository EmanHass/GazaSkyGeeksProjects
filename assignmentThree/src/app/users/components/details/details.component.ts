import { UserService } from './../../users-service/user.service';
import { Component, OnInit} from '@angular/core';
import { Users } from '../../model-interface/model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  userDetails: Users;
  constructor(private usersService:UserService) { }

  ngOnInit(): void {
    // To Get user details based on Id and display it in html div
    this.usersService.getData().subscribe(
      res=> this.userDetails=res
    )
  }


}

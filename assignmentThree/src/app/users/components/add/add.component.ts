import { Users } from './../../model-interface/model';
import { UserService } from './../../users-service/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor(private usersService: UserService) { }

  ngOnInit(): void {
  }
  addNew(newUser: Users){
    this.usersService.add(newUser).subscribe(
      res=> console.log(res)
      
    )
  }

}

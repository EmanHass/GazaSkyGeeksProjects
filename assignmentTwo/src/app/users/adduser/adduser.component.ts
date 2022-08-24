import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {
  registrationFG: FormGroup;
  constructor(private usersService:UsersService) { 
    this.initializationFG();
  }
  initializationFG(): void {
    this.registrationFG= new FormGroup({
      id: new FormControl('10'),
      name: new FormGroup({
        firstName: new FormControl('samar'),
        lastName: new FormControl('Mohammed')
      }),
      birthDate: new FormControl('1/1/1999'),
      email: new FormControl('samar@gmail.com'),
      phone: new FormControl('0591236547'),
      address: new FormControl('Gaza')
    })
  }

  ngOnInit(): void {
  }

  onsubmitForm():void{
    this.usersService.addUser(this.registrationFG.value)
  }

}

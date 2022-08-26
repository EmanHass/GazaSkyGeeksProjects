import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {
  registrationFG: FormGroup;
  success:boolean=false;
  
  constructor(private usersService:UsersService) { 
    this.initializationFG();
  }
  initializationFG(): void {
    this.registrationFG= new FormGroup({
      id: new FormControl('',[Validators.required]),
      name: new FormGroup({
        firstName: new FormControl('',[Validators.required]),
        lastName: new FormControl('',[Validators.required])
      }),
      birthDate: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required, Validators.email]),
      phone: new FormControl('',[Validators.required]),
      address: new FormControl('',[Validators.required])
    })
  }

  ngOnInit(): void {
  }

  onsubmitForm():void{
    if(this.registrationFG.valid){
      this.usersService.addUser(this.registrationFG.value)
      this.success=true;
    }
  }
}

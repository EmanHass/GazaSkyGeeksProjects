import { Role } from 'src/app/shared-modules/models/enums/role.enum';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from './../../../shared-modules/models/user.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  @Input() data: User;
  @Output() onUpdate: EventEmitter<User> = new EventEmitter<User>()
  registrationFG: FormGroup;
  user:User;  
  constructor() {
    this.initializationFG();    
  }

  ngOnInit(): void {
    this.user = {
      id: 1,
      firstName: 'Eman',
      lastName: 'Hassouna',
      email: 'eman@gmail.com',
      role: Role.JOBSEEKER
    }; 
    if(this.user){
      this.registrationFG.setValue(this.user)
    }
  }
  initializationFG(): void {
    this.registrationFG = new FormGroup({
      id: new FormControl('', [Validators.required]),
      firstName: new FormControl('',[Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('',[Validators.required]),
      role: new FormControl('', [Validators.required]),
    });
  }
  onUpdateUser():void{
    
    if(this.registrationFG.valid){
      this.user= this.registrationFG.value;
      this.onUpdate.emit(this.registrationFG.value)     
    }else{
      this.registrationFG.markAllAsTouched()
    }

  }

}

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from './../../../shared-modules/models/user.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from '../../services/user.service';

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
  constructor(private userService:UserService) {
    this.initializationFG();    
  }

  ngOnInit(): void {
    this.user = this.userService.getUser(); 
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
      this.userService.UpdateUser(this.registrationFG.value);
      this.onUpdate.emit(this.registrationFG.value)     
    }else{
      this.registrationFG.markAllAsTouched()
    }

  }

}

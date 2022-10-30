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
  isSuccess: boolean=false;
  constructor() {
    this.initializationFG();    
  }

  ngOnInit(): void {
    this.registrationFG.setValue(this.data)
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
      this.data= this.registrationFG.value;
      this.onUpdate.emit(this.data);
      this.isSuccess = true;
      setTimeout(()=>{
        this.isSuccess = false; 
      },2000)      
    }else{
      this.registrationFG.markAllAsTouched()
    }
  }

}

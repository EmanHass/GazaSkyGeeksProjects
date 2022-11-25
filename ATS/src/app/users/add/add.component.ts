import { UserserviceService } from './../users-service.service';
import { User } from 'src/app/shared-modules/models/user.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  registrationFG: FormGroup; 
  isSuccess: boolean=false;
  constructor(private Userservice:UserserviceService, private router: Router) {
    this.initializationFG();    
  }

  ngOnInit(): void {
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
      this.Userservice.addUser(this.registrationFG.value);
     
      this.isSuccess = true;
      setTimeout(()=>{
        this.isSuccess = false;
        this.router.navigate(['/users/list']) 
      },2000)      
    }else{
      this.registrationFG.markAllAsTouched()
    }
  }

}

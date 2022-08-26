import { UsersService } from './../users.service';
import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.scss']
})
export class UpdateuserComponent implements OnInit {
    id:string;
    registrationFG: FormGroup;
    success:boolean=false;

  constructor(private route: ActivatedRoute, private usersService:UsersService) {
    this.initializationFG();
   }

   initializationFG(): void {  
    this.registrationFG= new FormGroup({
      id: new FormControl('',Validators.required),
      name: new FormGroup({
        firstName: new FormControl('',Validators.required),
        lastName: new FormControl('',Validators.required)
      }),
      birthDate: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required,Validators.email]),
      phone:new FormControl('',Validators.required),
      address: new FormControl('',Validators.required)
    })
  }

  ngOnInit(): void {
    if(this.route.snapshot.paramMap.has('id')){
       this.id= this.route.snapshot.paramMap.get('id');
    }
    
    this.route.params.subscribe(
      (params:Params)=>{
        this.id= params['id'];
      }
    )
    this.registrationFG.setValue(this.usersService.getUserById(this.id))
  }

  onUpdate():void{
    if(this.registrationFG.valid){
    this.usersService.updateUser(this.id,this.registrationFG.value);
    this.success=true;
    }
  }
}

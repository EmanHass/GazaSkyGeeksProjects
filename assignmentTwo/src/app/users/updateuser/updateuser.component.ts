import { UsersService } from './../users.service';
import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.scss']
})
export class UpdateuserComponent implements OnInit {
    id:string;
    registrationFG: FormGroup;

  constructor(private route: ActivatedRoute, private usersService:UsersService) {
    this.initializationFG();
   }

   initializationFG(): void {  
    this.registrationFG= new FormGroup({
      id: new FormControl(''),
      name: new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl('')
      }),
      birthDate: new FormControl(''),
      email: new FormControl(''),
      phone:new FormControl(''),
      address: new FormControl('')
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
    this.usersService.updateUser(this.id,this.registrationFG.value)
  }

}

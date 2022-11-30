import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserserviceService } from '../users-service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  registrationFG: FormGroup; 
  isSuccess: boolean=false;
  id: number;
  constructor(private route: ActivatedRoute, private Userservice:UserserviceService, private router: Router) {
    this.initializationFG();    
  }

  ngOnInit(): void {
    this.fillFormWithInfo();
  }
  fillFormWithInfo():void{
    this.route.params.subscribe((params: Params) => {
      this.id = Number(params['id']);
    });
    this.registrationFG.setValue(this.Userservice.getUserById(this.id));
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
      this.Userservice.updateUser(this.id,this.registrationFG.value);
     
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

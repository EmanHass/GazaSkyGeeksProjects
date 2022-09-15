import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../users-service/user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  id:string;
  registrationFG: FormGroup;
  success: boolean = false;

  constructor(private usersService: UserService, private route: ActivatedRoute) {
    this.initializationFG(); 
  }
  ngOnInit(): void {
    if (this.route.snapshot.paramMap.has('id')) {
      this.id = this.route.snapshot.paramMap.get('id');
    }

    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
    this.usersService.getByID(Number(this.id)).subscribe(
      (res: any) => this.registrationFG.setValue(res.data),
      error => error
    )  
    
  }
  initializationFG(): void {
    this.registrationFG = new FormGroup({
      id: new FormControl('', [Validators.required]),
      first_name: new FormControl('', [Validators.required]),
      last_name: new FormControl('', [Validators.required]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      avatar: new FormControl('', [Validators.required]),
    });
  }

  // when click on update button
  onUpdate(): void {
    if (this.registrationFG.valid) {
      this.usersService.update(Number(this.id), this.registrationFG.value).subscribe(
        res=> console.log('updated is success:', res),
        error=> console.log('Error', error),
      );
      this.success = true;
    }
  }

}

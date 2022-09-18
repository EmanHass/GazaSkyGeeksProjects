import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../../users-service/user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit, OnDestroy {
  id: string;
  registrationFG: FormGroup;
  subscription: Subscription;
  success: boolean = false;

  constructor(private usersService: UserService,private route: ActivatedRoute) {
    this.initializationFG();
  }
  ngOnInit(): void {
    // To Get data(id) from URL
    if (this.route.snapshot.paramMap.has('id')) {
      this.id = this.route.snapshot.paramMap.get('id');
    }

   this.subscription=this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
    
    // To Get User by id, and set value in form inputs
    this.usersService.getByID(Number(this.id)).subscribe(
      (res: any) => this.registrationFG.setValue(res.data),
      (error) => error
    );
  }
  // Reactive form module
  initializationFG(): void {
    this.registrationFG = new FormGroup({
      id: new FormControl('', [Validators.required]),
      first_name: new FormControl('', [Validators.required]),
      last_name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      avatar: new FormControl('', [Validators.required]),
    });
  }

  // when click on update button
  onUpdate(): void {
    if (this.registrationFG.valid) {
      this.usersService
        .update(Number(this.id), this.registrationFG.value)
        .subscribe(
          (res) => {
            this.success = true;
          },
          (error) => console.log('Error', error)
        );
    }
  }
  ngOnDestroy(): void {
   if(this.subscription)
     this.subscription.unsubscribe();
  }
}

import { Users } from './../../model-interface/model';
import { UserService } from './../../users-service/user.service';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  registrationFG: FormGroup;
  success: boolean = false;

  constructor(private usersService: UserService) {
    this.initializationFG();
  }
  initializationFG(): void {
    this.registrationFG = new FormGroup({
      id: new FormControl('', [Validators.required]),
      first_name: new FormControl('', [Validators.required]),
      last_name: new FormControl('', [Validators.required]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        this.customEmail(),
      ]),
      avatar: new FormControl('', [Validators.required]),
    });
  }
  customEmail(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;

      if (value && !value.includes('.com')) {
        return { emailCustom: true };
      }
      return null;
    };
  }

  ngOnInit(): void {}

  onsubmitForm(): void {
    if (this.registrationFG.valid) {
      this.usersService.add(this.registrationFG.value).subscribe(
        (res) => {
          this.success = true;
        },
        (error) => console.error(error)
      );
    }
  }
}

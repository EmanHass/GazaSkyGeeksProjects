import { UsersService } from './../users.service';
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
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss'],
})
export class AdduserComponent implements OnInit {
  registrationFG: FormGroup;
  success: boolean = false;

  constructor(private usersService: UsersService) {
    this.initializationFG();
    console.log(this.registrationFG.get('birthDate').errors);
    
  }
  initializationFG(): void {
    this.registrationFG = new FormGroup({
      id: new FormControl('', [Validators.required]),
      name: new FormGroup({
        firstName: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required]),
      }),
      birthDate: new FormControl('', [Validators.required,Validators.maxLength(10), Validators.maxLength(10)]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        this.customEmail(),
      ]),
      phone: new FormControl('', [this.customValidationPhone(10, 10)]),
      address: new FormControl('', [Validators.required]),
    });
  }
  customEmail(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;

      if (value && !value.includes('.com')) {
        return { emailC: true };
      }
      return null;
    };
  }
  // Make Validation For Phone Filed In One Method
  customValidationPhone(max: number, min: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (value && isNaN(value)) return { isNumberic: true };
      else if (value && !(value.startsWith('059') || value.startsWith('056')))
        return { startNumber: true };
      else if (value && (value.length < min || value.length > max)) {
        return { maxMinLengthC: true, min: min };
      }
      return null;
    };
  }

  ngOnInit(): void {}

  onsubmitForm(): void {
    if (this.registrationFG.valid) {
      this.usersService.addUser(this.registrationFG.value);
      this.success = true;
    }
  }
}

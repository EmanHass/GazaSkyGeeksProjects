import { EducationServiceService } from './../../../services/education-service.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-education-add',
  templateUrl: './education-add.component.html',
  styleUrls: ['./education-add.component.css']
})
export class EducationAddComponent implements OnInit {

  @Input() formData: any;
  
  registrationFG: FormGroup;

  ngOnInit(): void {
    if(this.formData){
      //edit
    }else{
      //add
    }
  }

  constructor(private educationService: EducationServiceService) {
    this.initializationFG();    
  }
  initializationFG(): void {
    this.registrationFG = new FormGroup({
      id: new FormControl('', [Validators.required]),
      majorId: new FormControl('',[Validators.required]),
      countryId: new FormControl('', [Validators.required]),
      cityId: new FormControl('',[Validators.required]),
      universityId: new FormControl('', [Validators.required]),
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
      presentStatus: new FormControl('', [Validators.required]),
    });
  }

  onsubmitForm(): void {
    if (this.registrationFG.valid) {
      this.educationService.addEducation(this.registrationFG.value);
    }
  }
}

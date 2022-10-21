import { ExperienceServiceService } from './../../../services/experience-service.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-experiences-add',
  templateUrl: './experiences-add.component.html',
  styleUrls: ['./experiences-add.component.css']
})
export class ExperiencesAddComponent implements OnInit {

  @Input() formData: any;
  
  registrationFG: FormGroup;

  ngOnInit(): void {
    if(this.formData){
      //edit
    }else{
      //add
    }
  }

  constructor(private experienceService: ExperienceServiceService) {
    this.initializationFG();    
  }
  initializationFG(): void {
    this.registrationFG = new FormGroup({
      id: new FormControl('', [Validators.required]),
      position: new FormControl('',[Validators.required]),
      company: new FormControl('',[Validators.required]),
      countryId: new FormControl('', [Validators.required]),
      cityId: new FormControl('',[Validators.required]),
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
      presentStatus: new FormControl('', [Validators.required]),
      salary: new FormControl('', [Validators.required]),
    });
  }

  onsubmitForm(): void {
    if (this.registrationFG.valid) {
      this.experienceService.addExperience(this.registrationFG.value);
    }
  }

}

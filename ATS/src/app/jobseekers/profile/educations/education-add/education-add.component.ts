import { DropdownService } from './../../../../shared-modules/services/dropdown.service';
import { Dropdown } from './../../../../shared-modules/models/dropdown-models/dropdown.model';
import { Education } from './../../../../shared-modules/models/education.model';
import { EducationServiceService } from './../../../services/education-service.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-education-add',
  templateUrl: './education-add.component.html',
  styleUrls: ['./education-add.component.css']
})
export class EducationAddComponent implements OnInit {

  @Input() formData: Education;
  @Output() onUpdate: EventEmitter<Education[]> = new EventEmitter<Education[]>();
  countryList: Dropdown[]=[];
  cityList: Dropdown[]=[];
  universityList: Dropdown[];
  majorList: Dropdown[];
  registrationFG: FormGroup;

  constructor(private educationService: EducationServiceService,private dropdownService:DropdownService) {
    this.initializationFG();    
  }

  ngOnInit(): void {
    this.countryList=this.dropdownService.getCountries();
    this.majorList = this.dropdownService.getMajors();

    if(this.formData){
      this.registrationFG.setValue(this.formData)
    }else{
      //add
    }
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
      this.onUpdate.emit(this.registrationFG.value)
    }
  }
  onItemSelect(event: any, type: string){
    if(type == 'conutry'){
      this.cityList=this.dropdownService.getCities(event.id)        
    }else if(type == 'city'){
      this.universityList= this.dropdownService.getUniversities(event.id)
    }else if(type == 'university'){

    }else if(type == 'major'){
      
    }

  }
}

import { DropdownService } from './../../../../shared-modules/services/dropdown.service';
import { Experience } from './../../../../shared-modules/models/experience.model';
import { ExperienceServiceService } from './../../../services/experience-service.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Dropdown } from 'src/app/shared-modules/models/dropdown-models/dropdown.model';

@Component({
  selector: 'app-experiences-add',
  templateUrl: './experiences-add.component.html',
  styleUrls: ['./experiences-add.component.css']
})
export class ExperiencesAddComponent implements OnInit {

  @Input() formData: any;
  @Output() onUpdate : EventEmitter<Experience[]> = new EventEmitter<Experience[]>()
  registrationFG: FormGroup;
  isEdit: boolean = false;
  countryList: Dropdown[]=[];
  cityList: Dropdown[]=[];
  selectedCountryId: number;
  selectedCityId: number;

  ngOnInit(): void {
    this.countryList=this.dropdownService.getCountries();
    if(this.formData){
      this.isEdit=true;
      this.registrationFG.setValue(this.formData);
      this.selectedCountryId= this.formData.countryId;
      this.cityList= this.dropdownService.getCities(this.formData.countryId);
      this.selectedCityId= this.formData.cityId;
    }else{
      this.isEdit=false;
    }
  }

  constructor(private experienceService: ExperienceServiceService, private dropdownService:DropdownService) {
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
      this.onUpdate.emit(this.registrationFG.value)
    }
  }

  onEditForm():void{
    if(this.registrationFG.valid){
      this.experienceService.updateExperience(this.formData.id, this.registrationFG.value);
      this.onUpdate.emit(this.experienceService.getExperience());   
    }else{
      this.registrationFG.markAllAsTouched()
    }
  }

  onItemSelect(event: any, type: string){
    let id= event.id;
  if(type == 'conutry'){
    this.registrationFG.get('countryId').setValue(id);
    this.cityList=this.dropdownService.getCities(id)        
  }else if(type == 'city'){
    this.registrationFG.get('cityId').setValue(id);
  }
}

}

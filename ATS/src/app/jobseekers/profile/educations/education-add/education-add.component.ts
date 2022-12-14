import { DropdownService } from './../../../../shared-modules/services/dropdown.service';
import { Dropdown } from './../../../../shared-modules/models/dropdown-models/dropdown.model';
import { Education } from './../../../../shared-modules/models/education.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-education-add',
  templateUrl: './education-add.component.html',
  styleUrls: ['./education-add.component.css']
})
export class EducationAddComponent implements OnInit {

  @Input() formData: Education;
  @Input() data: Education[];
  @Output() onUpdate: EventEmitter<Education[]> = new EventEmitter<Education[]>();
  isEdit: boolean = false;
  showStatus: boolean = true;
  countryList: Dropdown[]=[];
  cityList: Dropdown[]=[];
  universityList: Dropdown[];
  majorList: Dropdown[];
  registrationFG: FormGroup;
  selectedMajorId: number;
  selectedCountryId: number;
  selectedCityId: number;
  selectedUniId: number;
  isSuccess: boolean= false;
  successMsg: string;

  constructor(private dropdownService:DropdownService) {
    this.initializationFG();    
  }

  ngOnInit(): void {
    
    this.countryList=this.dropdownService.getCountries();
    this.majorList = this.dropdownService.getMajors();

    if(this.formData){
      this.isEdit=true;
      this.registrationFG.setValue(this.formData);
      this.selectedMajorId= this.formData.majorId;
      this.selectedCountryId= this.formData.countryId;
      this.cityList= this.dropdownService.getCities(this.formData.countryId);
      this.selectedCityId= this.formData.cityId;
      this.universityList=this.dropdownService.getUniversities(this.formData.cityId);
      this.selectedUniId= this.formData.universityId;

    }else{
      this.isEdit=false;
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
      presentStatus: new FormControl(false, [Validators.required]),
    });
  }

  // when add a new item
  onsubmitForm(): void {
    if (this.registrationFG.valid) {
      this.data.push(this.registrationFG.value);
      this.onUpdate.emit(this.data);
      this.showStatus=false;
      this.isSuccess = true;
      this.successMsg = 'Success  Add!'
      setTimeout(()=>{
        this.isSuccess = false; 
      },2000)  
    }else{
      this.registrationFG.markAllAsTouched()
    }
  }

  // when edit item
  onEditForm():void{
    if(this.registrationFG.valid){
      this.data = this.data.map(val => {
        if (val.id == this.formData.id) {
          return (val = this.registrationFG.value);
        } else return val;
      });
      this.onUpdate.emit(this.data); 
      this.showStatus=false ;
      this.isSuccess = true;
      this.successMsg = 'Success Update!'
      setTimeout(()=>{
        this.isSuccess = false; 
      },2000)  
    }else{
      this.registrationFG.markAllAsTouched()
    }
  }

  // when select item from dropdown then save it in registraion form group
  onItemSelect(event: any, type: string){
      let id= event.id;
    if(type == 'conutry'){
      this.registrationFG.get('countryId').setValue(id);
      this.cityList=this.dropdownService.getCities(id)        
    }else if(type == 'city'){
      this.registrationFG.get('cityId').setValue(id);
      this.universityList= this.dropdownService.getUniversities(id)
    }else if(type == 'university'){
      this.registrationFG.get('universityId').setValue(id);
    }else if(type == 'major'){
      this.registrationFG.get('majorId').setValue(id);
    }
  }
}

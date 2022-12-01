import { Job } from './../../shared-modules/models/job.model';
import { Dropdown } from 'src/app/shared-modules/models/dropdown-models/dropdown.model';
import { JobsService } from './../jobs.service';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DropdownService } from 'src/app/shared-modules/services/dropdown.service';
@Component({
  selector: 'app-add-jobs',
  templateUrl: './add-jobs.component.html',
  styleUrls: ['./add-jobs.component.css']
})
export class AddJobsComponent implements OnInit {
  registrationFG: FormGroup; 
  isSuccess: boolean=false;
  countryList: Dropdown[];
  selectedCountryId: number;
  selectedCityId: number;
  cityList: Dropdown[];
  jobTypeList: Dropdown[];
  sectorsList: Dropdown[];
  functionalAreaList: Dropdown[];
  nationality: Dropdown[];
  educationLevel: Dropdown[];
  languagesList: Dropdown[];
  languagesSelected: number[]=[];
  skillsList: Dropdown[];
  skillsSelected: number[]=[];
  benefitsList: Dropdown[];
  benefitsSelected: number[]=[];

  constructor(private jobsService:JobsService, private router: Router, private dropdownService:DropdownService) {
    this.initializationFG();    
  }

  ngOnInit(): void {
    this.countryList = this.dropdownService.getCountries();
    this.jobTypeList = this.dropdownService.getJobType();
    this.sectorsList = this.dropdownService.getSectors();
    this.functionalAreaList = this.dropdownService.getFunctionalAreas();
    this.nationality = this.dropdownService.getNationality();
    this.educationLevel = this.dropdownService.getEducationLevel();
    this.languagesList = this.dropdownService.getLanguages();
    this.skillsList = this.dropdownService.getSkills();
    this.benefitsList = this.dropdownService.getBenefits();
  }
  initializationFG(): void {
    this.registrationFG = new FormGroup({
      id: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required]),
      sectorId: new FormControl('', [Validators.required]),
      functionalAreaId: new FormControl('', [Validators.required]),
      countryId: new FormControl('', [Validators.required]),
      cityId: new FormControl('', [Validators.required]),
      yearsOfExperience: new FormGroup({
        from: new FormControl('',[Validators.required]),
        to: new FormControl('',[Validators.required])
      }),
      expectedSalary: new FormGroup({
        from: new FormControl('',[Validators.required]),
        to: new FormControl('',[Validators.required])
      }),
      jobTypeId: new FormControl('', [Validators.required]),
      lowEducationLevelId: new FormControl('', [Validators.required]),
      highEducationLevelId: new FormControl('', [Validators.required]),
      nationalityId: new FormControl('', [Validators.required]),
      skillIds: new FormControl([], [Validators.required]),
      description: new FormControl('', [Validators.required]),
      requirements: new FormControl('', [Validators.required]),
      benefitIds: new FormControl([], [Validators.required]),
      languageIds: new FormControl([], [Validators.required])
    });
  }
  onSubmit():void{  
    
    if(this.registrationFG.valid){ 
      let newId = this.registrationFG.get('id').value;    
      this.jobsService.addJob(this.registrationFG.value);
     
      this.isSuccess = true;
      setTimeout(()=>{
        this.isSuccess = false;
        this.router.navigate(['/jobs/list']) 
      },2000)      
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
    }else if(type == 'sector'){
      this.registrationFG.get('sectorId').setValue(id);
    }else if(type == 'functionalArea'){
      this.registrationFG.get('functionalAreaId').setValue(id);
    }else if(type == 'nationality'){
      this.registrationFG.get('nationalityId').setValue(id);
    }else if(type == 'lowEducationLevel'){
      this.registrationFG.get('lowEducationLevelId').setValue(id);
    }else if(type == 'highEducationLevel'){
      this.registrationFG.get('highEducationLevelId').setValue(id);
    }else if(type == 'jobType'){
      this.registrationFG.get('jobTypeId').setValue(id);
    }else if(type == 'languages'){
      this.languagesSelected=[];
      event.forEach((element:any) => {
       this.languagesSelected.push(element.id);
       this.registrationFG.get('languageIds').setValue(this.languagesSelected);
       console.log('values',this.registrationFG.value);
       
      });
    }else if(type == 'skills'){
      this.skillsSelected=[];
      event.forEach((element:any) => {
        this.skillsSelected.push(element.id);
        this.registrationFG.get('skillIds').setValue(this.skillsSelected);
        console.log('form',this.registrationFG.value);
        
       });
    }else if(type == 'benefits'){
      this.benefitsSelected=[];
      event.forEach((element:any) => {
        this.benefitsSelected.push(element.id);
        this.registrationFG.get('benefitIds').setValue(this.benefitsSelected);
       });
       console.log(this.benefitsSelected);
       
    }
  }

}

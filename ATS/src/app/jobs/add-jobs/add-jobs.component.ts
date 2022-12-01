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
  languages: Dropdown[];
  languagesSelected: number[]=[];
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
    this.languages = this.dropdownService.getLanguages();
  }
  initializationFG(): void {
    this.registrationFG = new FormGroup({
      id: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required]),
      sectorId: new FormControl(''),
      functionalAreaId: new FormControl(''),
      countryId: new FormControl(''),
      cityId: new FormControl(''),
      yearsOfExperience: new FormControl('', [Validators.required]),
      expectedSalary: new FormControl('', [Validators.required]),
      jobTypeId: new FormControl(''),
      lowEducationLevelId: new FormControl(''),
      highEducationLevelId: new FormControl(''),
      nationalityId: new FormControl(''),
      skillIds: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      requirements: new FormControl('', [Validators.required]),
      benefitIds: new FormControl('', [Validators.required]),
    });
  }
  onSubmit():void{  
    
    if(this.registrationFG.valid){ 
      let newid = this.registrationFG.get('id').value;
      
      let newJob: Job = {...this.registrationFG.value, id:Number(newid), languageIds:this.languagesSelected}     
      this.jobsService.addJob(newJob);
     
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
      event.forEach((element:any) => {
       this.languagesSelected.push(element.id);
      });
    
    }
  }

}

import { DropdownService } from './../../shared-modules/services/dropdown.service';
import { Job } from './../../shared-modules/models/job.model';
import { JobsService } from './../jobs.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detail-job',
  templateUrl: './detail-job.component.html',
  styleUrls: ['./detail-job.component.css']
})
export class DetailJobComponent implements OnInit {
  id: number;
  jobDetail: Job;
  sectorName: string;
  benefits:string[];
  functionalArea: string;
  country: string;
  city: string;
  nationality: string;
  jobType: string;
  lowEducationLevel: string;
  highEducationLevel: string;
  languages: string[];
  skills: string[];
  constructor(private route: ActivatedRoute, private jobService: JobsService, private dropdownService:DropdownService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = Number(params['id']);
    });
    this.jobDetail = this.jobService.getjobById(this.id);
    this.sectorName=(this.dropdownService.getSectors().find(val => val.id == this.jobDetail.sectorId)).name;
    this.benefits=this.dropdownService.getBenefits().map((val,index)=>{
      if(val.id == this.jobDetail.benefitIds[index]){
         return val.name
      }else{
        return null
      }
    }) 
    console.log('before pop',this.benefits);

    this.benefits.pop();
    this.benefits.join(',');
    console.log(this.benefits);
    
    this.functionalArea = (this.dropdownService.getFunctionalAreas().find(value=> value.id == this.jobDetail.functionalAreaId)).name;
    this.country = (this.dropdownService.getCountries().find(value=> value.id == this.jobDetail.countryId)).name;
    this.city = (this.dropdownService.getCities(0,true).find(value=> value.id == this.jobDetail.cityId)).name;
    this.nationality = (this.dropdownService.getNationality().find(value=> value.id == this.jobDetail.nationalityId)).name;
    this.jobType = (this.dropdownService.getJobType().find(value=> value.id == this.jobDetail.jobTypeId)).name;
    this.lowEducationLevel = (this.dropdownService.getEducationLevel().find(value=> value.id == this.jobDetail.lowEducationLevelId)).name;
    this.highEducationLevel = (this.dropdownService.getEducationLevel().find(value=> value.id == this.jobDetail.highEducationLevelId)).name;
    this.languages = this.dropdownService.getLanguages().map((val,index)=>{
      if(val.id == this.jobDetail.languageIds[index]){
         return val.name
      }else{
        return ''
      }
    })
    this.languages.pop();
    this.languages.join(',');
    this.skills = this.dropdownService.getSkills().map((val,index)=>{
      if(val.id == this.jobDetail.skillIds[index]){
         return val.name
      }else{
        return ''
      }
    })
    this.skills.pop();
    this.skills.join(',');
  }




}

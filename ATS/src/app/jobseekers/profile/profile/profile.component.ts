import { JobseekersService } from './../../jobseekers.service';
import { Language } from './../../../shared-modules/models/language.model';
import { Experience } from './../../../shared-modules/models/experience.model';
import { Education } from './../../../shared-modules/models/education.model';
import { Contact } from './../../../shared-modules/models/contact.model';
import { Address } from './../../../shared-modules/models/address.model';
import { Jobseeker } from './../../../shared-modules/models/jobseeker.model';
import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/shared-modules/models/skill.model';
import { User } from 'src/app/shared-modules/models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  jobseeker: Jobseeker;
  user:User;
  address: Address; 
  contact : Contact;
  educations: Education[];
  experiences: Experience[];
  skills: Skill[];
  languages: Language[];
  
  constructor(private jobseekersService:JobseekersService) { }

  ngOnInit(): void {
    this.educations = this.jobseekersService.getEducations();
    this.experiences = this.jobseekersService.getExperiences();
    this.address = this.jobseekersService.getAddress();
    this.contact = this.jobseekersService.getContact();
    this.user = this.jobseekersService.getUser();
    this.skills = this.jobseekersService.getSkills();
    this.languages = this.jobseekersService.getLanguages();
  }

  onProfileUpdate(data: any, type: string): void {
    if(type === 'address'){
      this.address = data;
    }else
    if(type == 'education'){
      this.educations = data;
    }else
    if(type == 'experience'){
      this.experiences = data;
    }else if(type == 'contact'){
      this.contact=data
    }else if(type == 'skill'){
      this.skills=data
    }else if(type == 'user'){
      this.user=data
    }else if(type == 'language'){
      this.languages=data
    }
  }

  onSaveAll():void{

    this.jobseeker={
      educations:this.educations,
      experiences: this.experiences,
      contact: this.contact,
      address: this.address,
      user: this.user,
      skills:this.skills,
      languages:this.languages
    }
    console.log('jobseeker',this.jobseeker);   
  }
}

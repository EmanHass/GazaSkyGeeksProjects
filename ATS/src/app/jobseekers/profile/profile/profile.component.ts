import { UserService } from './../../services/user.service';
import { ContactService } from './../../services/contact.service';
import { ExperienceServiceService } from './../../services/experience-service.service';
import { EducationServiceService } from './../../services/education-service.service';
import { Language } from './../../../shared-modules/models/language.model';
import { Experience } from './../../../shared-modules/models/experience.model';
import { Education } from './../../../shared-modules/models/education.model';
import { Contact } from './../../../shared-modules/models/contact.model';
import { Address } from './../../../shared-modules/models/address.model';
import { Jobseeker } from './../../../shared-modules/models/jobseeker.model';
import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/shared-modules/models/skill.model';
import { AddressService } from '../../services/address.service';
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
  
   constructor(
     private educationService:EducationServiceService,
     private experienceService:ExperienceServiceService,
     private contactService:ContactService,
     private addressService: AddressService,
     private userService: UserService
    ) { }

  ngOnInit(): void {
  }

  onProfileUpdate(data: any, type: string): void {
    if(type === 'address'){
      this.address = data;
    }else
    if(type == 'education'){
      this.educations = data;
      console.log('educations',this.educations);
    }else
    if(type == 'experience'){
      this.experiences = data;
      console.log('experience',this.experiences);
    }else if(type == 'contact'){
      this.contact=data
    }
  }

  onSaveAll():void{
    this.jobseeker={
      educations:this.educationService.getEducations(),
      experiences: this.experienceService.getExperience(),
      contact: this.contactService.getContact(),
      address: this.addressService.getAddress(),
      user: this.userService.getUser()
    }
    console.log('jobseeker',this.jobseeker);
    
  }
}

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
  
   constructor() { }

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
    }else if(type == 'skill'){
      this.skills=data
    }else if(type == 'user'){
      this.user=data
    }else if(type == 'language'){
      this.languages=data
    }
  }

  onSaveAll():void{
    // this.jobseeker={
    //   educations:this.educationService.getEducations(),
    //   experiences: this.experienceService.getExperience(),
    //   contact: this.contactService.getContact(),
    //   address: this.addressService.getAddress(),
    //   user: this.userService.getUser(),
    //   skills:this.skillService.getSkills(),
    //   languages:this.languageService.getLanguages()
    // }

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

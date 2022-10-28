import { UserService } from './services/user.service';
import { AddressService } from './services/address.service';
import { EducationServiceService } from './services/education-service.service';
import { ProfileModule } from './profile/profile.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobseekersRoutingModule } from './jobseekers-routing.module';
import { SharedModules } from '../shared-modules/shared-modules.module';
import { ContactService } from './services/contact.service';
import { ExperienceServiceService } from './services/experience-service.service';

const services=[
  EducationServiceService,
  ExperienceServiceService,
  ContactService,
  AddressService, 
  UserService
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    JobseekersRoutingModule,
    ProfileModule,
    SharedModules
  ],
  providers:[
    ...services
  ]
})
export class JobseekersModule { }

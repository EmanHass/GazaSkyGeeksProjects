import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { JobseekerInfoComponent } from './jobseeker-info/jobseeker-info.component';
import { SharedModules } from 'src/app/shared-modules/shared-modules.module';
import { ExperiencesComponent } from './experiences/experiences.component';
import { EducationsComponent } from './educations/educations.component';
import { EducationAddComponent } from './educations/education-add/education-add.component';
import { ExperiencesAddComponent } from './experiences/experiences-add/experiences-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserInfoComponent } from './user-info/user-info.component';
import { SkillsComponent } from './skills/skills.component';
import { LanguagesComponent } from './languages/languages.component';
import { SkillAddComponent } from './skills/skill-add/skill-add.component';
import { LanguageAddComponent } from './languages/language-add/language-add.component';


@NgModule({
  declarations: [
    ProfileComponent,
    JobseekerInfoComponent,
    ExperiencesComponent,
    EducationsComponent,
    EducationAddComponent,
    ExperiencesAddComponent,
    UserInfoComponent,
    SkillsComponent,
    LanguagesComponent,
    SkillAddComponent,
    LanguageAddComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModules,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ProfileModule { }

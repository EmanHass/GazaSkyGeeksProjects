import { Skill } from 'src/app/shared-modules/models/skill.model';
import { Injectable } from '@angular/core';
import { Address } from '../shared-modules/models/address.model';
import { Contact } from '../shared-modules/models/contact.model';
import { Education } from '../shared-modules/models/education.model';
import { Experience } from '../shared-modules/models/experience.model';
import { Jobseeker } from '../shared-modules/models/jobseeker.model';
import { User } from '../shared-modules/models/user.model';
import { Language } from '../shared-modules/models/language.model';
import { Role } from '../shared-modules/models/enums/role.enum';

@Injectable()
export class JobseekersService {
  jobseeker: Jobseeker;
  user:User={
    id: 1,
    firstName: 'Eman',
    lastName: 'Hassouna',
    email: 'eman@gmail.com',
    role: Role.JOBSEEKER
  };
  address: Address={
    country: 'palestine',
    region: 'AlRemal',
    city: 'Gaza',
    street: 'Alshawa',
    buildingNumber: 500
  }; 
  contact : Contact={
    id: 1,
    email: 'eman@gmail.com',
    phone: 28123456,
    mobile: 92524307,
    fax: 5
  };
  educations: Education[]=[
    {id:1, majorId:1, countryId:1, cityId:1, universityId:1, startDate: '2020-9-15', endDate: '', presentStatus:true},
    {id:2, majorId:2, countryId:2, cityId:2, universityId:3, startDate: '2018-8-22', endDate: '2021-9-20', presentStatus:false},
  ];
  experiences: Experience[]=[
    {id:1, position:'manager',company:'GSG', countryId:1, cityId:1, startDate:'2018-11-8', endDate:'2025-11-8',presentStatus:'Yes', salary:5000},
    {id:2, position:'developer',company:'GSG', countryId:2, cityId:1, startDate:'2015-8-9', endDate:'2019-8-9',presentStatus:'No', salary:6000},
  ];
  skills: Skill[]=[
    {id:1, levelId:1},
    {id:2, levelId:2},
  ];
  languages: Language[]=[
    {id:1, level:1, native:true},
    {id:2, level:2, native:false},
  ];

  constructor() { }

  getEducations():Education[]{
    return this.educations;
  }
  getExperiences(): Experience[]{
    return this.experiences;
  }
  getLanguages(): Language[]{
    return this.languages;
  }
  getSkills(): Skill[]{
    return this.skills;
  }
  getUser(): User{    
    return this.user;
  }
  getAddress(): Address{    
    return this.address;
  }
  getContact(): Contact{    
    return this.contact;
  }
}

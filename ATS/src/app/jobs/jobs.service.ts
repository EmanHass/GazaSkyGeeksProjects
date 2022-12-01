import { Job } from './../shared-modules/models/job.model';
import { Injectable } from '@angular/core';

@Injectable()
export class JobsService {
  jobs: Job[]=[
    {
      id: 1,
      title: 'Seeking Canadian Developer: PHP/Wordpress/Amazon AWS/Angular',
      sectorId:1,
      functionalAreaId: 1,
      countryId: 1,
      cityId: 1, 
      yearsOfExperience: {
        from:2,
        to:5
      },
      expectedSalary : {
        from:500,
        to:1500
      },
      jobTypeId: 2,
      lowEducationLevelId: 1,
      highEducationLevelId: 2,
      nationalityId: 1,
      languageIds:[1,2],
      skillIds:[1,2],
      description: 'We are looking for a developer that knows PHP, Wordpress, Angular, Gravity Forms, AWS and can speak/write english fluently. The position is full-time.',
      requirements: "We are looking for a senior developer that is able to work in an environment with mid-level developers and a CTO that will be their manager. The role will be to develop new features and be able to look over and confirm code of mid-level developers and upload. The critical part here is that the person will be responsible for the code they write and confirm prior to uploading.",
      benefitIds: [1,2]
    },
    {
      id: 2,
      title: 'Backend development for cross platform app',
      sectorId:2,
      functionalAreaId: 2,
      countryId: 2,
      cityId: 4, 
      yearsOfExperience: {
        from:2,
        to:5
      },
      expectedSalary : {
        from:600,
        to:900
      },
      jobTypeId: 2,
      lowEducationLevelId: 1,
      highEducationLevelId: 2,
      nationalityId: 2,
      languageIds:[1,2],
      skillIds:[1,2],
      description: 'Backend development for cross platform app',
      requirements: "im looking for backend developer to do with making a complete solution",
      benefitIds: [1,2]
    },
    {
      id: 3,
      title: 'Looking Full Stack Java Developer',
      sectorId:1,
      functionalAreaId: 2,
      countryId: 1,
      cityId: 2, 
      yearsOfExperience: {
        from:2,
        to:5
      },
      expectedSalary : {
        from:1200,
        to:1900
      },
      jobTypeId: 2,
      lowEducationLevelId: 1,
      highEducationLevelId: 2,
      nationalityId: 1,
      languageIds:[1,2],
      skillIds:[1,2],
      description: "We are a small software development studio based out of Atlanta, GA. We are looking for a full stack developer to help us on 1 or 2 projects. You must have experience developing web applications using Java w/Spring boot to create rest apes",
      requirements: "Angular and typescript are a must because our  frontend is written with Angular2. No agencies will be considered. No soliciting outside of  Upwork.",
      benefitIds: [1,2]
    },
    {
      id: 3,
      title: 'Looking Full Stack Java Developer',
      sectorId:1,
      functionalAreaId: 2,
      countryId: 1,
      cityId: 2, 
      yearsOfExperience: {
        from:2,
        to:5
      },
      expectedSalary : {
        from:1200,
        to:1900
      },
      jobTypeId: 2,
      lowEducationLevelId: 1,
      highEducationLevelId: 2,
      nationalityId: 1,
      languageIds:[1,2],
      skillIds:[1,2],
      description: "We are a small software development studio based out of Atlanta, GA. We are looking for a full stack developer to help us on 1 or 2 projects. You must have experience developing web applications using Java w/Spring boot to create rest apes",
      requirements: "Angular and typescript are a must because our  frontend is written with Angular2. No agencies will be considered. No soliciting outside of  Upwork.",
      benefitIds: [1,2]
    },
    {
      id: 3,
      title: 'Looking Full Stack Java Developer',
      sectorId:1,
      functionalAreaId: 2,
      countryId: 1,
      cityId: 2, 
      yearsOfExperience: {
        from:2,
        to:5
      },
      expectedSalary : {
        from:1200,
        to:1900
      },
      jobTypeId: 2,
      lowEducationLevelId: 1,
      highEducationLevelId: 2,
      nationalityId: 1,
      languageIds:[1,2],
      skillIds:[1,2],
      description: "We are a small software development studio based out of Atlanta, GA. We are looking for a full stack developer to help us on 1 or 2 projects. You must have experience developing web applications using Java w/Spring boot to create rest apes",
      requirements: "Angular and typescript are a must because our  frontend is written with Angular2. No agencies will be considered. No soliciting outside of  Upwork.",
      benefitIds: [1,2]
    },
    {
      id: 3,
      title: 'Looking Full Stack Java Developer',
      sectorId:1,
      functionalAreaId: 2,
      countryId: 1,
      cityId: 2, 
      yearsOfExperience: {
        from:2,
        to:5
      },
      expectedSalary : {
        from:1200,
        to:1900
      },
      jobTypeId: 2,
      lowEducationLevelId: 1,
      highEducationLevelId: 2,
      nationalityId: 1,
      languageIds:[1,2],
      skillIds:[1,2],
      description: "We are a small software development studio based out of Atlanta, GA. We are looking for a full stack developer to help us on 1 or 2 projects. You must have experience developing web applications using Java w/Spring boot to create rest apes",
      requirements: "Angular and typescript are a must because our  frontend is written with Angular2. No agencies will be considered. No soliciting outside of  Upwork.",
      benefitIds: [1,2]
    },
    {
      id: 3,
      title: 'Looking Full Stack Java Developer',
      sectorId:1,
      functionalAreaId: 2,
      countryId: 1,
      cityId: 2, 
      yearsOfExperience: {
        from:2,
        to:5
      },
      expectedSalary : {
        from:1200,
        to:1900
      },
      jobTypeId: 2,
      lowEducationLevelId: 1,
      highEducationLevelId: 2,
      nationalityId: 1,
      languageIds:[1,2],
      skillIds:[1,2],
      description: "We are a small software development studio based out of Atlanta, GA. We are looking for a full stack developer to help us on 1 or 2 projects. You must have experience developing web applications using Java w/Spring boot to create rest apes",
      requirements: "Angular and typescript are a must because our  frontend is written with Angular2. No agencies will be considered. No soliciting outside of  Upwork.",
      benefitIds: [1,2]
    },
    {
      id: 1,
      title: 'Seeking Canadian Developer: PHP/Wordpress/Amazon AWS/Angular',
      sectorId:1,
      functionalAreaId: 1,
      countryId: 1,
      cityId: 1, 
      yearsOfExperience: {
        from:2,
        to:5
      },
      expectedSalary : {
        from:500,
        to:1500
      },
      jobTypeId: 2,
      lowEducationLevelId: 1,
      highEducationLevelId: 2,
      nationalityId: 1,
      languageIds:[1,2],
      skillIds:[1,2],
      description: 'We are looking for a developer that knows PHP, Wordpress, Angular, Gravity Forms, AWS and can speak/write english fluently. The position is full-time.',
      requirements: "We are looking for a senior developer that is able to work in an environment with mid-level developers and a CTO that will be their manager. The role will be to develop new features and be able to look over and confirm code of mid-level developers and upload. The critical part here is that the person will be responsible for the code they write and confirm prior to uploading.",
      benefitIds: [1,2]
    },
    {
      id: 1,
      title: 'Seeking Canadian Developer: PHP/Wordpress/Amazon AWS/Angular',
      sectorId:1,
      functionalAreaId: 1,
      countryId: 1,
      cityId: 1, 
      yearsOfExperience: {
        from:2,
        to:5
      },
      expectedSalary : {
        from:500,
        to:1500
      },
      jobTypeId: 2,
      lowEducationLevelId: 1,
      highEducationLevelId: 2,
      nationalityId: 1,
      languageIds:[1,2],
      skillIds:[1,2],
      description: 'We are looking for a developer that knows PHP, Wordpress, Angular, Gravity Forms, AWS and can speak/write english fluently. The position is full-time.',
      requirements: "We are looking for a senior developer that is able to work in an environment with mid-level developers and a CTO that will be their manager. The role will be to develop new features and be able to look over and confirm code of mid-level developers and upload. The critical part here is that the person will be responsible for the code they write and confirm prior to uploading.",
      benefitIds: [1,2]
    },
    {
      id: 1,
      title: 'Seeking Canadian Developer: PHP/Wordpress/Amazon AWS/Angular',
      sectorId:1,
      functionalAreaId: 1,
      countryId: 1,
      cityId: 1, 
      yearsOfExperience: {
        from:2,
        to:5
      },
      expectedSalary : {
        from:500,
        to:1500
      },
      jobTypeId: 2,
      lowEducationLevelId: 1,
      highEducationLevelId: 2,
      nationalityId: 1,
      languageIds:[1,2],
      skillIds:[1,2],
      description: 'We are looking for a developer that knows PHP, Wordpress, Angular, Gravity Forms, AWS and can speak/write english fluently. The position is full-time.',
      requirements: "We are looking for a senior developer that is able to work in an environment with mid-level developers and a CTO that will be their manager. The role will be to develop new features and be able to look over and confirm code of mid-level developers and upload. The critical part here is that the person will be responsible for the code they write and confirm prior to uploading.",
      benefitIds: [1,2]
    }
  ]
  constructor() { }

  getJobs():Job[]{
    return this.jobs;
  }
  getjobById(id:number): Job{
    return this.jobs.find(val=> val.id == id);
  }
  addJob(job:Job): void{
    this.jobs.push(job);
  }
}

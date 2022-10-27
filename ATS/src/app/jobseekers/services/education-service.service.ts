import { Education } from './../../shared-modules/models/education.model';
import { Injectable } from '@angular/core';

@Injectable()
export class EducationServiceService {
  eductions: Education[]=[
    {id:1, majorId:1, countryId:1, cityId:1, universityId:1, startDate:'25-5-2015', endDate:'25-5-2019',presentStatus:'yes'},
    {id:2, majorId:1, countryId:1, cityId:1, universityId:1, startDate:'25-5-2015', endDate:'25-5-2019',presentStatus:'yes'},
    {id:3, majorId:1, countryId:1, cityId:1, universityId:1, startDate:'25-5-2015', endDate:'25-5-2019',presentStatus:'yes'},
    {id:4, majorId:1, countryId:1, cityId:1, universityId:1, startDate:'25-5-2015', endDate:'25-5-2019',presentStatus:'yes'},  
  ];
  constructor() { }

  getEducations(): Education[]{
    return this.eductions;
  }
  addEducation(values: Education): void {
    this.eductions.push(values);
  }
  getById(id:number): Education{
    return this.eductions.find(val => val.id === id);
  }
  updateEducation(id: number, updatedUser: Education): void {
    this.eductions = this.eductions.map(val => {
      if (val.id == id) {
        return (val = updatedUser);
      } else return val;
    });
  }

  removeEducation(id: number): Education[] {
    return this.eductions = this.eductions.filter(val => val.id !== id);
  }
}

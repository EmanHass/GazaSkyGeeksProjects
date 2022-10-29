import { Education } from './../../shared-modules/models/education.model';
import { Injectable } from '@angular/core';

@Injectable()
export class EducationServiceService {
  eductions: Education[]=[
    {id:1, majorId:1, countryId:1, cityId:1, universityId:1, startDate: '2020-9-15', endDate: '', presentStatus:true},
    {id:2, majorId:2, countryId:2, cityId:2, universityId:3, startDate: '2018-8-22', endDate: '2021-9-20', presentStatus:false},
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
  updateEducation(id: number, updatedUser: Education):void {    
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

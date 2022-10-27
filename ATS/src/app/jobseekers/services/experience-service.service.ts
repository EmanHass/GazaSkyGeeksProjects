import { Experience } from './../../shared-modules/models/experience.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ExperienceServiceService {
  experiences: Experience[]=[
    {id:1, position:'manager',company:'GSG', countryId:1, cityId:1, startDate:'25-5-2015', endDate:'25-5-2019',presentStatus:'yes', salary:5000},
    {id:2, position:'manager',company:'GSG', countryId:1, cityId:1, startDate:'25-5-2015', endDate:'25-5-2019',presentStatus:'yes', salary:5000},
    {id:3, position:'manager',company:'GSG', countryId:1, cityId:1, startDate:'25-5-2015', endDate:'25-5-2019',presentStatus:'yes', salary:5000},
    {id:4, position:'manager',company:'GSG', countryId:1, cityId:1, startDate:'25-5-2015', endDate:'25-5-2019',presentStatus:'yes', salary:5000},
  ];
  constructor() { }

  getExperience(): Experience[]{
    return this.experiences;
  }
  addExperience(values: Experience): void {
    this.experiences.push(values);
  }
  updateExperience(id: number, updatedUser: Experience): void {
    this.experiences = this.experiences.map(val => {
      if (val.id == id) {
        return (val = updatedUser);
      } else return val;
    });
  }

  removeExperience(id: number): Experience[] {
    return this.experiences = this.experiences.filter(val => val.id !== id);
  }
}

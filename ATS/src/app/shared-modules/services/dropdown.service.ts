import { DropdownParent } from './../models/dropdown-models/dropdown-with-parent.model';
import { Dropdown } from './../models/dropdown-models/dropdown.model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DropdownService{
  deopdownKey: string='dropdown'
  constructor() { }

  getAll(): Observable<any>{
    let dropdowns={
      countries:{},
      cities:{},
      sectors:{},
      functionalAreas:{},
      languages:{},
      benefits:{},
      jobType:{},
      nationality:{},
      educationLevel:{},
      skills:{},
      levelForLanguagesOrSkills:{},
      status:{},
      majors:{},
      universities:{}
      };
      dropdowns['countries']=[
        {id:1, name: 'Palestine'},
        {id:2, name: 'Jordan'}
      ];

      dropdowns['cities']=[
        {id:1, name: 'Gaza', parentId:1},
        {id:2, name: 'Ramallah', parentId:1},
        {id:3, name: 'Jenine', parentId:1},
        {id:4, name: 'Amman', parentId:2},
        {id:5, name: 'Irbid', parentId:2},
      ]

      dropdowns['sectors']=[
        {id:1, name: 'IT and Management'},
        {id:2, name: 'Accounting'}
      ];

      dropdowns['functionalAreas']=[
        {id:1, name: 'Computer science'},
        {id:2, name: 'Markting'}
      ];

      dropdowns['languages']=[
        {id:1, name: 'Arabic'},
        {id:2, name: 'English'}
      ];

      dropdowns['benefits']=[
        {id:1, name: 'Work from Home'},
        {id:2, name: 'Health Insurance'},
        {id:3, name: 'Flexable Hours'}
      ];

      dropdowns['jobType']=[
        {id:1, name: 'Part Time'},
        {id:2, name: 'Full Time'},
      ];

      dropdowns['nationality']=[
        {id:1, name: 'Palestinian'},
        {id:2, name: 'Jordanian'},
      ];

      dropdowns['educationLevel']=[
        {id:1, name: 'bachelor\'s'},
        {id:2, name: 'Master'},
      ];

      dropdowns['skills']=[
        {id:1, name: 'TypeScript'},
        {id:2, name: 'JavaScript'},
        {id:3, name: 'Rxjs'}
      ];

      dropdowns['levelForLanguagesOrSkills']=[
        {id:1, name: 'Arabic', level:'advanced'},
        {id:2, name: 'English', level:'intermediate'},
        {id:3, name: 'TypeScript', level:'beginner'}
      ];

      dropdowns['status']=[
        {id:1, name: 'open'},
        {id:2, name: 'close'},
      ];

      dropdowns['majors']=[
        {id:1, name: 'Software Engineer'},
        {id:2, name: 'Multi Media'},
      ];

      dropdowns['universities']=[
        {id:1, name: 'Al-Azhar University', cityId:1},
        {id:2, name: 'Al-Islamic University', cityId:1},
        {id:3, name: 'Batra', cityId:4}
      ];
    return of(dropdowns)
  }

  setDropdownInStorage(dropdown:any): void{
    localStorage.setItem(this.deopdownKey,JSON.stringify(dropdown))
  }

  getDropdown(): any{
   return  JSON.parse(localStorage.getItem(this.deopdownKey));
  }

  getCountries(): Dropdown[]{
    return this.getDropdown() && this.getDropdown().countries;
  }
  getCities(): DropdownParent[]{
    return this.getDropdown() && this.getDropdown().cities;
  }
  getSectors(): Dropdown[]{
    return this.getDropdown() && this.getDropdown().sectors;
  }
  getFunctionalAreas(): Dropdown[]{
    return this.getDropdown() && this.getDropdown().functionalAreas;
  }
  getLanguages(): Dropdown[]{
    return this.getDropdown() && this.getDropdown().languages;
  }
  getBenefits(): Dropdown[]{
    return this.getDropdown() && this.getDropdown().benefits;
  }
  getJobType(): Dropdown[]{
    return this.getDropdown() && this.getDropdown().jobType;
  }
  getNationality(): Dropdown[]{
    return this.getDropdown() && this.getDropdown().nationality;
  }getEducationLevel(): Dropdown[]{
    return this.getDropdown() && this.getDropdown().educationLevel;
  }
  getSkills(): Dropdown[]{
    return this.getDropdown() && this.getDropdown().skills;
  }
  getLevelForLanguagesOrSkills(): Dropdown[]{
    return this.getDropdown() && this.getDropdown().levelForLanguagesOrSkills;
  }
  getStatus(): Dropdown[]{
    return this.getDropdown() && this.getDropdown().status;
  }
  getMajors(): Dropdown[]{
    return this.getDropdown() && this.getDropdown().majors;
  }
  getUniversities(): DropdownParent[]{
    return this.getDropdown() && this.getDropdown().universities;
  }
}

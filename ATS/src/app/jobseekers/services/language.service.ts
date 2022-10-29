import { Injectable } from '@angular/core';
import { Language } from 'src/app/shared-modules/models/language.model';

@Injectable()
export class LanguageService {
  languages: Language[]=[
    {id:1, level:1, native:true},
    {id:2, level:2, native:false},
  ];
  constructor() { }

  getLanguages(): Language[]{
    return this.languages;
  }
  getById(id:number): Language{
    return this.languages.find(val => val.id === id);
  }
  addLanguage(values: Language): void {
    this.languages.push(values);
  }
  updateLanguage(index: number, updatedUser: Language): void {
    this.languages[index]= updatedUser;
  }

  removeLanguage(id: number): Language[] {
    return this.languages = this.languages.filter(val => val.id !== id);
  }
}

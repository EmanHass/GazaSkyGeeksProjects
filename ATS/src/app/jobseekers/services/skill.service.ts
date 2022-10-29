import { Skill } from 'src/app/shared-modules/models/skill.model';
import { Injectable } from '@angular/core';

@Injectable()
export class SkillService {
  skills: Skill[]=[
    {id:1, levelId:1},
    {id:2, levelId:2},
  ];
  constructor() { }

  getSkills(): Skill[]{
    return this.skills;
  }
  getById(id:number): Skill{
    return this.skills.find(val => val.id === id);
  }
  addSkill(values: Skill): void {
    this.skills.push(values);
  }
  updateSkill(index: number, updatedUser: Skill): void {
    this.skills[index]= updatedUser;
  }

  removeSkill(id: number): Skill[] {
    return this.skills = this.skills.filter(val => val.id !== id);
  }
}

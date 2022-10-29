import { DropdownService } from './../../../../shared-modules/services/dropdown.service';
import { SkillService } from './../../../services/skill.service';
import { Dropdown } from './../../../../shared-modules/models/dropdown-models/dropdown.model';
import { Skill } from './../../../../shared-modules/models/skill.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-skill-add',
  templateUrl: './skill-add.component.html',
  styleUrls: ['./skill-add.component.css']
})
export class SkillAddComponent implements OnInit {
  @Input() index: number;
  @Input() formData: Skill;
  @Output() onUpdate: EventEmitter<Skill[]> = new EventEmitter<Skill[]>();
  showStatus: boolean= true;
  isEdit: boolean = false;
  skillsList: Dropdown[]=[];
  levelsList: Dropdown[]=[];
  selectedSkill: number;
  selectedLevel: number;

  constructor(private skillService: SkillService,private dropdownService:DropdownService) {   
  }

  ngOnInit(): void {
    this.skillsList=this.dropdownService.getSkills();
    this.levelsList = this.dropdownService.getLevelForLanguagesOrSkills();

    if(this.formData){
      this.isEdit=true;
      this.selectedSkill= this.formData.id;
      this.selectedLevel= this.formData.levelId;      
    }else{
      this.isEdit=false;
    }
  }
  onsubmitForm(): void {
    if(this.selectedSkill && this.selectedLevel){
      this.skillService.addSkill({id:this.selectedSkill,levelId: this.selectedLevel});
      this.onUpdate.emit(this.skillService.getSkills());
      this.showStatus=false
    }
  }
  onEditForm():void{    
      this.skillService.updateSkill(this.index, {id:this.selectedSkill,levelId: this.selectedLevel});  
      this.onUpdate.emit(this.skillService.getSkills()); 
      this.showStatus=false 
  }

  onItemSelect(event: any, type: string){
    let id= event.id;
  if(type == 'skill'){
    this.selectedSkill = id;
  }else if(type == 'level'){
    this.selectedLevel = id
  }
}
}

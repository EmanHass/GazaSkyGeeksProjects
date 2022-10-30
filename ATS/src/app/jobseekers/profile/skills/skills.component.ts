import { Skill } from 'src/app/shared-modules/models/skill.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  showAddFormStatus: boolean = false;
  @Input() data: Skill[] = [];
  @Output() onUpdate: EventEmitter<Skill[]> = new EventEmitter<Skill[]>();
  selectedIndex: number;
  formData: Skill=null;
  formType: number = 1;
  constructor() { }

  ngOnInit(): void {
    this.data= [
      {id:1, levelId:1},
      {id:2, levelId:2},
    ];
  }

  toggleAddForm(): void {
    this.formType = 1;
    this.formData = null;
    this.showAddFormStatus = !this.showAddFormStatus;
  }

  onFormUpdate(value: Skill[]){
    if(this.formType === 1){
      //add
      this.data=value;
      this.onUpdate.emit(this.data);
    }else{
      //edit
      this.data=value;
      this.onUpdate.emit(this.data);
    }
  }

  onEdit(index: number): void {
    this.showAddFormStatus = false;
    this.formType = 2;
    setTimeout(()=>{
      this.showAddFormStatus = true;
      this.formData= this.data[index];
      this.selectedIndex = index;
    },500)
  }
  remove(id:number):void{
    this.data=this.data.filter(val => val.id !== id);
    this.onUpdate.emit(this.data);    
  }

}

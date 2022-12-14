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
  remove(index:number):void{
    this.data=this.data.filter((value, position) => !(position === index));
    this.onUpdate.emit(this.data);    
  }

}

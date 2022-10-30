import { Experience } from './../../../shared-modules/models/experience.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {

  showAddFormStatus: boolean = false;
  @Input() data: Experience[] = [];
  @Output() onUpdate: EventEmitter<Experience[]> = new EventEmitter<Experience[]>()
  formData: Experience;
  formType: number = 1;

  constructor() { }

  ngOnInit(): void {
  }
  toggleAddForm(): void {
    this.formType = 1;
    this.formData = null;
    this.showAddFormStatus = !this.showAddFormStatus;
  }

  onFormUpdate(value: Experience[]){
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
  onEdit(id: number): void {
    this.showAddFormStatus = false;
    this.formType = 2;
    setTimeout(()=>{
      this.showAddFormStatus = true;
      this.formData= this.data.find(val => val.id === id);  
    },500)
  }

  remove(id:number):void{
    this.data=this.data.filter(val => val.id !== id);
    this.onUpdate.emit(this.data)    
  }
}

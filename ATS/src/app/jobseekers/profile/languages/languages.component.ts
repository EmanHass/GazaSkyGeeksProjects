import { Language } from './../../../shared-modules/models/language.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {
  
  showAddFormStatus: boolean = false;
  @Input() data: Language[] = [];
  @Output() onUpdate: EventEmitter<Language[]> = new EventEmitter<Language[]>();
  selectedIndex: number;
  formData: Language=null;
  formType: number = 1;
  constructor() { }

  ngOnInit(): void {
  }

  toggleAddForm(): void {
    this.formType = 1;
    this.formData = null;
    this.showAddFormStatus = !this.showAddFormStatus;
  }

  onFormUpdate(value: Language[]){
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

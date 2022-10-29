import { Language } from './../../../shared-modules/models/language.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LanguageService } from '../../services/language.service';

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
  constructor(private languageService: LanguageService) { }

  ngOnInit(): void {
    this.displayLanguage();
  }
  displayLanguage():void{
    this.data= this.languageService.getLanguages();
  }

  toggleAddForm(): void {
    this.formType = 1;
    this.formData = null;
    this.showAddFormStatus = !this.showAddFormStatus;
  }

  onFormUpdate(){
    if(this.formType === 1){
      //add
      this.onUpdate.emit(this.data);
    }else{
      //edit
      this.displayLanguage();
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
    this.data=this.languageService.removeLanguage(id);
    this.onUpdate.emit(this.data)    
  }

}

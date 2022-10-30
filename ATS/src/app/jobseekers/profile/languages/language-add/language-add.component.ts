import { DropdownService } from './../../../../shared-modules/services/dropdown.service';
import { Dropdown } from './../../../../shared-modules/models/dropdown-models/dropdown.model';
import { Language } from './../../../../shared-modules/models/language.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-language-add',
  templateUrl: './language-add.component.html',
  styleUrls: ['./language-add.component.css']
})
export class LanguageAddComponent implements OnInit {
  @Input() index: number;
  @Input() formData: Language;
  @Input() data: Language[];
  @Output() onUpdate: EventEmitter<Language[]> = new EventEmitter<Language[]>();
  showStatus: boolean= true;
  isEdit: boolean = false;
  languageList: Dropdown[]=[];
  levelsList: Dropdown[]=[];
  selectedLanguage: number;
  selectedLevel: number;
  selectedNative: boolean;
  constructor(private dropdownService:DropdownService) {   
  }

  ngOnInit(): void {
    this.languageList=this.dropdownService.getLanguages();
    this.levelsList = this.dropdownService.getLevelForLanguagesOrSkills();

    if(this.formData){
      this.isEdit=true;
      this.selectedLanguage= this.formData.id;
      this.selectedLevel= this.formData.level; 
      this.selectedNative = this.formData.native;     
    }else{
      this.isEdit=false;
    }
  }
  onsubmitForm(): void {
    console.log('submit');
    
    if(this.selectedLanguage && this.selectedLevel){
      this.data.push({id:this.selectedLanguage, level:this.selectedLevel, native:this.selectedNative});
      this.onUpdate.emit(this.data);
      this.showStatus=false;
    }
  }
  onEditForm():void{    
      this.data[this.index] = {id:this.selectedLanguage,level: this.selectedLevel, native:this.selectedNative};
      this.onUpdate.emit(this.data); 
      this.showStatus=false; 
  }

  onItemSelect(event: any, type: string){    
  let id= event.id;
  if(type == 'language'){
    this.selectedLanguage = id;
  }else if(type == 'level'){
    this.selectedLevel = id
  }
}

}

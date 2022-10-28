import { ExperienceServiceService } from './../../services/experience-service.service';
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
  constructor(private experienceService: ExperienceServiceService) { }

  ngOnInit(): void {
    this.displayExperience();
  }
  displayExperience():void{
    this.data=this.experienceService.getExperience();
  }
  remove(id:number):void{
    this.data=this.experienceService.removeExperience(id);
    this.onUpdate.emit(this.data);    
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
      this.displayExperience();
      this.onUpdate.emit(this.data);
    }
  }
  onEdit(id: number): void {
    this.showAddFormStatus = false;
    this.formType = 2;
    setTimeout(()=>{
      this.showAddFormStatus = true;
      this.formData= this.experienceService.getById(id);
      console.log('formdata',this.formData);    
    },500)
  }
}

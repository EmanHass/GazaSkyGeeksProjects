import { ExperienceServiceService } from './../../services/experience-service.service';
import { Experience } from './../../../shared-modules/models/experience.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {

  showAddFormStatus: boolean = false;
  experiences: Experience[] = [];
  formData: any;
  formType: number = 1;
  constructor(private experienceService: ExperienceServiceService) { }

  ngOnInit(): void {
    this.displayEducations();
  }
  displayEducations():void{
    this.experiences=this.experienceService.getExperience();
  }
  remove(id:number):void{
    this.experiences=this.experienceService.removeExperience(id);    
  }

  toggleAddForm(): void {
    this.formType = 1;
    this.formData = null;
    this.showAddFormStatus = !this.showAddFormStatus;
    // this.onUpdate.emit(this.educations);
  }

  onFormUpdate(formData: any){
    if(this.formType === 1){
      //add
    }else{
      //edit
    }
    //set new instance from formdata
    //push new instance into educations array
    //emit this educations array
  }


  onEditData(index: number): void {
    this.formType = 2;
    this.formData = this.experiences[index];
  }

}

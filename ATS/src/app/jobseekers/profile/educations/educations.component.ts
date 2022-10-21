import { Education } from './../../../shared-modules/models/education.model';
import { EducationServiceService } from './../../services/education-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educations',
  templateUrl: './educations.component.html',
  styleUrls: ['./educations.component.css']
})
export class EducationsComponent implements OnInit {

  showAddFormStatus: boolean = false;
  educations: Education[] = [];
  formData: any;
  formType: number = 1;
  constructor(private educationService: EducationServiceService) { }

  ngOnInit(): void {
    this.displayEducations();
  }
  displayEducations():void{
    this.educations=this.educationService.getEducations();
  }
  remove(id:number):void{
    this.educations=this.educationService.removeEducation(id);    
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
    this.formData = this.educations[index];
  }

}

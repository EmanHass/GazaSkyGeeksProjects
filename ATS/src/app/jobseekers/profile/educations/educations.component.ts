import { Education } from './../../../shared-modules/models/education.model';
import { EducationServiceService } from './../../services/education-service.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-educations',
  templateUrl: './educations.component.html',
  styleUrls: ['./educations.component.css']
})
export class EducationsComponent implements OnInit {

  showAddFormStatus: boolean = false;
  @Input() data: Education[] = [];
  @Output() onUpdate: EventEmitter<Education[] | Education> = new EventEmitter<Education[] | Education>();

  formData: Education=null;
  formType: number = 1;
  constructor(private educationService: EducationServiceService) { }

  ngOnInit(): void {
    this.displayEducations();
  }
  displayEducations():void{
    this.data= this.educationService.getEducations();
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
      this.onUpdate.emit(this.educationService.getEducations());
    }
  }

  onEdit(id: number): void {
    this.showAddFormStatus = false;
    this.formType = 2;
    setTimeout(()=>{
      this.showAddFormStatus = true;
      this.formData= this.educationService.getById(id);
      console.log('formdata',this.formData);
      
    },500)
  }
  remove(id:number):void{
    this.data=this.educationService.removeEducation(id);
    this.onUpdate.emit(this.data)    
  }

}

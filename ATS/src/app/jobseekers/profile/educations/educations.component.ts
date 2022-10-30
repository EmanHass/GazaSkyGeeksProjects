import { Education } from './../../../shared-modules/models/education.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-educations',
  templateUrl: './educations.component.html',
  styleUrls: ['./educations.component.css']
})
export class EducationsComponent implements OnInit {

  showAddFormStatus: boolean = false;
  @Input() data: Education[] = [];
  @Output() onUpdate: EventEmitter<Education[]> = new EventEmitter<Education[]>();

  formData: Education=null;
  formType: number = 1;
  constructor() { }

  ngOnInit(): void {
    this.data= [
      {id:1, majorId:1, countryId:1, cityId:1, universityId:1, startDate: '2020-9-15', endDate: '', presentStatus:true},
      {id:2, majorId:2, countryId:2, cityId:2, universityId:3, startDate: '2018-8-22', endDate: '2021-9-20', presentStatus:false},
    ];
  }

  toggleAddForm(): void {
    this.formType = 1;
    this.formData = null;
    this.showAddFormStatus = !this.showAddFormStatus;
  }

  onFormUpdate(value: Education[]){
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
      console.log('formdata',this.formData);
      
    },500)
  }
  remove(id:number):void{
    this.data=this.data.filter(val => val.id !== id);
    this.onUpdate.emit(this.data)    
  }

}

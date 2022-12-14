import { Contact } from './../../models/contact.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { __values } from 'tslib';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Input() data: Contact;
  @Output() onUpdate: EventEmitter<Contact> = new EventEmitter<Contact>()
  registrationFG: FormGroup;
  contact:Contact;  
  isSuccess: boolean=false;
  constructor() {
    this.initializationFG();    
  }

  ngOnInit(): void {
    this.registrationFG.setValue(this.data)
  }
  initializationFG(): void {
    this.registrationFG = new FormGroup({
      id: new FormControl('', [Validators.required]),
      email: new FormControl('',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      phone: new FormControl('', [Validators.required]),
      mobile: new FormControl('',[Validators.required]),
      fax: new FormControl('', [Validators.required]),
    });
  }

  onUpdateContact():void{
    if(this.registrationFG.valid){
      this.data = this.registrationFG.value;
      this.onUpdate.emit(this.data);
      this.isSuccess = true; 
      setTimeout(()=>{
        this.isSuccess = false; 
      },2000)   
    }else{
      this.registrationFG.markAllAsTouched()
    }
  }
}

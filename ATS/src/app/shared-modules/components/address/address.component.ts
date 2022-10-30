import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Address } from './../../models/address.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  @Input() data: Address;
  @Output() onUpdate: EventEmitter<Address> = new EventEmitter<Address>()
  registrationFG: FormGroup;
  isSuccess: boolean =false; 
  constructor() {
    this.initializationFG();    
  }

  ngOnInit(): void {
      this.registrationFG.setValue(this.data)
  }
  initializationFG(): void {
    this.registrationFG = new FormGroup({
      country: new FormControl('', [Validators.required]),
      region: new FormControl('',[Validators.required]),
      city: new FormControl('', [Validators.required]),
      street: new FormControl('',[Validators.required]),
      buildingNumber: new FormControl('', [Validators.required]),
    });
  }
  onUpdateAddress():void{   
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

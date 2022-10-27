import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AddressService } from './../../../jobseekers/services/address.service';
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
  address:Address;  
  constructor(private addressService:AddressService) {
    this.initializationFG();    
  }

  ngOnInit(): void {
    this.address = this.addressService.getAddress(); 
    this.registrationFG.setValue(this.address)
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
      this.addressService.UpdateAddress(this.registrationFG.value);
      this.onUpdate.emit(this.registrationFG.value)     
    }else{
      this.registrationFG.markAllAsTouched()
    }

  }
}

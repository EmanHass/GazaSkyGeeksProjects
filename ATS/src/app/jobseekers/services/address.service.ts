import { Address } from './../../shared-modules/models/address.model';
import { Injectable } from '@angular/core';

@Injectable()
export class AddressService {
  address: Address={
    country: 'palestine',
    region: 'AlRemal',
    city: 'Gaza',
    street: 'Alshawa',
    buildingNumber: 500
  };
  constructor() { }

  getAddress(): Address{    
    return this.address;
  }

  UpdateAddress(newData: Address):void{
    this.address=newData
  }
}

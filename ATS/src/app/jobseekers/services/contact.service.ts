import { Contact } from './../../shared-modules/models/contact.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ContactService {
  contact: Contact={
    id: 1,
    email: 'eman@gmail.com',
    phone: 28123456,
    mobile: 92524307,
    fax: 5
  };
  constructor() { }

  getContact(): Contact{    
    return this.contact;
  }

  UpdateContact(newData: Contact):void{
    this.contact=newData
  }
}

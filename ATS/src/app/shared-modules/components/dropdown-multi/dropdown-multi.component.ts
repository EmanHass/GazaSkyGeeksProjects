import { Dropdown } from './../../models/dropdown-models/dropdown.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IDropdownSettings, } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-dropdown-multi',
  templateUrl: './dropdown-multi.component.html',
  styleUrls: ['./dropdown-multi.component.css']
})
export class DropdownMultiComponent implements OnInit {

  constructor() { }
  @Input() list:Dropdown[];
  @Output() onItemSelect: EventEmitter<Dropdown[]> = new EventEmitter<Dropdown[]>();
  @Input() selesctedValue: Dropdown[]=[];
  dropdownSettings:IDropdownSettings={};
  ngOnInit() {
    this.dropdownSettings = {
      idField: 'id',
      textField: 'name',
    };
  }

  onSelect(value:any){  
    this.selesctedValue.push(value); 
    console.log('valuse selected: ',this.selesctedValue);
            
    this.onItemSelect.emit(this.selesctedValue)   
  }

  onSelectAll(items: any[]) {
    this.selesctedValue = items;
    console.log('select all: ',this.selesctedValue);
    
    this.onItemSelect.emit(this.selesctedValue);
}
onItemDeSelect(item: any) {
  this.selesctedValue=this.selesctedValue.filter(val=> !(val.id == item.id))
}
onUnSelectAll(){
  this.selesctedValue=[];
  console.log('unselect',this.selesctedValue);
}

}

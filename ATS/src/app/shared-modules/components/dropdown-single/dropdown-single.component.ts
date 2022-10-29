import { AfterViewInit, Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Dropdown } from '../../models/dropdown-models/dropdown.model';
declare var $:any;
@Component({
  selector: 'app-dropdown-single',
  templateUrl: './dropdown-single.component.html',
  styleUrls: ['./dropdown-single.component.css']
})
export class DropdownSingleComponent implements OnInit, AfterViewInit {
  @Input() list: Dropdown[];
  @Output() onItemSelect: EventEmitter<Dropdown> = new EventEmitter<Dropdown>();
  @Input() selesctedValue : number;
  constructor() { }
  ngAfterViewInit(): void {
    $('.select2').select2()
  }

  ngOnInit(): void {
  }

  onSelect(value:any){    
    let item = this.list.find(i=>i.id== value);   
    this.onItemSelect.emit(item)   
  }

}

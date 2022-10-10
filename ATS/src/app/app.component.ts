import { DropdownService } from './shared-modules/services/dropdown.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private dropdownService: DropdownService){}
  ngOnInit(): void {
    this.dropdownService.getAll().subscribe(
      res=>{
      this.dropdownService.setDropdownInStorage(res);

      }
    )
  }
  title = 'ATS';
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  jobseeker: any = {}
  address: any = {};
  constructor() { }

  ngOnInit(): void {
  }

  onProfileUpdate(data: any, type: string): void {
    if(type === 'address'){
      this.address = data;
    }
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-app2';
  arr: string[] = ['eman','eng.','22'];
  isLog: boolean = true;
}

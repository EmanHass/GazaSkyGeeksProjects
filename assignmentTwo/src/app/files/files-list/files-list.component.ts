import { FilesServiceService } from './../files-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-files-list',
  templateUrl: './files-list.component.html',
  styleUrls: ['./files-list.component.scss']
})
export class FilesListComponent implements OnInit {
  files:any[];
  constructor(private filesService: FilesServiceService) { }

  ngOnInit(): void {
    this.files=this.filesService.getFiles();
  }

}

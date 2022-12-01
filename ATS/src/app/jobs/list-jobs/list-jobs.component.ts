import { Job } from './../../shared-modules/models/job.model';
import { JobsService } from './../jobs.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-jobs',
  templateUrl: './list-jobs.component.html',
  styleUrls: ['./list-jobs.component.css']
})
export class ListJobsComponent implements OnInit {
  listJobs: Job[];
  constructor(private jobsService:JobsService) { }

  ngOnInit(): void {
    this.listJobs = this.jobsService.getJobs().slice(0,5);
  }

  viewAllJobs(): void{
    this.listJobs=this.jobsService.getJobs();
  }

}

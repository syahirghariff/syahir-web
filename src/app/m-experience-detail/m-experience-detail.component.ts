import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Job } from '../model/job';
import { JobDetail } from '../model/job_detail';

@Component({
  selector: 'app-m-experience-detail',
  templateUrl: './m-experience-detail.component.html',
  styleUrls: ['./m-experience-detail.component.scss']
})
export class MExperienceDetailComponent implements OnInit {

  @Input() job: Job;
  @Output() showDetail = new EventEmitter<any>();
  jobDetail: JobDetail = new JobDetail('A');

  constructor() { }

  ngOnInit(): void {

    if (this.job.jobDetail) {

      if (this.job.jobDetail.post) {
        const post = atob(this.job.jobDetail.post);
        this.job.jobDetail.post = post;

        console.log('post', post);
      }

      this.jobDetail = Object.assign({}, this.job.jobDetail);
    }
  }

  onBack() {

    if (this.jobDetail.post) {
      const post = btoa(this.jobDetail.post);
      this.jobDetail.post = post;
    }
    this.job.jobDetail = this.jobDetail;
    this.showDetail.emit(this.job);
  }

}

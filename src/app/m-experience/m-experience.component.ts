import { Component, OnInit } from '@angular/core';
import { Job } from '../model/job';
import { AlertUtil } from '../util/alert.util';
import { ResponseUtil } from '../util/response.util';
import { MExperienceService } from './m-experience.service';
import { Constants } from '../model/constants';


@Component({
  selector: 'app-m-experience',
  templateUrl: './m-experience.component.html',
  styleUrls: ['./m-experience.component.scss']
})
export class MExperienceComponent implements OnInit {

  jobs: Array<Job> = new Array();
  showDetail: boolean = false;
  job: Job;
  deleteAnimate: boolean = false;
  readonly constants = Constants;

  constructor(private experiencSvc: MExperienceService, private alertUtil: AlertUtil, private respUtil: ResponseUtil) {
  }

  ngOnInit(): void {

    this.findAll();
  }

  onUploadImage(event, index) {

    const file = event.target.files[0];
    const reader = new FileReader();
    var _this = this;

    if (file) {
      reader.readAsDataURL(file);
    }

    reader.addEventListener("load", () => {
      _this.jobs[index].encodeImg = (reader.result as string).split(',')[1];
    });

  }

  setToggle(i, event) {
    if (event.checked) {
      this.jobs[i].active = 'A';
    } else {
      this.jobs[i].active = 'X';
    }
  }

  onAddJobs() {
    let job = new Job('A');
    this.jobs.push(job);
  }

  onSubmit() {
    this.alertUtil.submitOnClick(() => {

      this.experiencSvc.doSubmit(this.jobs).subscribe((resp: any) => {

        this.respUtil.response(resp, (content) => {
          this.jobs = content;
        })

      });
    })
  }

  onDelete(job: Job, i: any) {

    if (!job.id) {
      this.jobs.splice(i, 1);
    } else {
      this.alertUtil.deleteOnClick(() => {

        this.experiencSvc.deleteById(job.id).subscribe((resp: any) => {

          this.respUtil.response(resp, (content) => {
            this.jobs = content;
          })
        });
      })


    }

    this.deleteAnimate = true;
  }

  onEditDetail(job, i) {
    this.job = job;
    this.showDetail = true;
    window.scrollTo(0, 0);
  }

  onBack(value) {
    window.scrollTo(0, 0);
    this.showDetail = false;
  }

  findAll() {
    this.experiencSvc.findAll().subscribe((resp: any) => {

      this.respUtil.load(resp, (content) => {
        this.jobs = content;
      })
    })
  }

}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExperienceDetailsComponent } from '../experience-details/experience-details.component';
import { MExperienceService } from '../m-experience/m-experience.service';
import { Technology } from '../model/technology';
import { ResponseUtil } from '../util/response.util';
import { Job } from '../model/job';
import { mixinColor } from '@angular/material/core';
import * as _ from "lodash";
import { Constants } from '../model/constants';
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],

})
export class ExperienceComponent implements OnInit {

  jobs: Array<Job> = new Array();

  readonly constants = Constants;

  constructor(private dialog: MatDialog, private mExperienceSvc: MExperienceService, private respUtil: ResponseUtil) { }

  ngOnInit(): void {
    this.getDisplay();
  }

  getDisplay() {

    this.mExperienceSvc.display().subscribe((resp: any) => {
      this.respUtil.load(resp, (content: any) => {
        this.jobs = content;
        setTimeout(() => {
          this.changeBackgroundImg(this.jobs);
        })
      });
    });

  }

  changeBackgroundImg(jobs) {

    _.forEach(jobs, (value, key) => {
      let background = document.getElementById('experience' + key);
      background.style.backgroundImage = 'linear-gradient(to left top, #141e30cc, #2c3e50ff), ' + 'url("data:image/png;base64,' + value.encodeImg + '")';
    })

  }

  openDialog() {

    var dialogProperties = {
      maxWidth: '110rem',
      data: this.jobs[1]
    }

    var x = window.matchMedia("(max-width: 75em)");

    if (x.matches) {
      dialogProperties = {
        maxWidth: '95%',
        data: this.jobs[1]
      }
    }

    const dialogRef = this.dialog.open(ExperienceDetailsComponent, dialogProperties);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

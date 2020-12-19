import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MEducationService } from '../m-education/m-education.service';
import { Education } from '../model/education';
import { InformationService } from '../services/information.service';
import { ResponseUtil } from '../util/response.util';
import { Constants } from '../model/constants';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {

  educations: Array<Education> = new Array();

  readonly constants = Constants;

  constructor(private mEducationSvc: MEducationService, private responseUtil: ResponseUtil, private infoSvc: InformationService) { }

  ngOnInit(): void {
    this.init();
  }

  init() {
    this.educations = this.infoSvc.getEducation();
  }

  getDisplay() {
    this.mEducationSvc.display().subscribe((resp: any) => {

      this.responseUtil.load(resp, (content) => {
        this.educations = content;
      })

    });
  }

}

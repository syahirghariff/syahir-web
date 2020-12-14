import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MEducationService } from '../m-education/m-education.service';
import { Education } from '../model/education';
import { ResponseUtil } from '../util/response.util';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {

  educations: Array<Education> = new Array();

  constructor(private mEducationSvc: MEducationService, private responseUtil: ResponseUtil) { }

  ngOnInit(): void {
    this.getDisplay();
  }

  getDisplay() {
    this.mEducationSvc.display().subscribe((resp: any) => {

      this.responseUtil.load(resp, (content) => {
        this.educations = content;
      })

    });
  }

}

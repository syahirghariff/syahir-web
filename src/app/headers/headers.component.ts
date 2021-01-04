import { Component, OnInit } from '@angular/core';
import { MProfileService } from '../m-profile/m-profile.service';
import { Profile } from '../model/profile';
import { ResponseUtil } from '../util/response.util';
import * as _ from "lodash";
import { Constants } from '../model/constants';
import { InformationService } from '../services/information.service';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.scss']
})
export class HeadersComponent implements OnInit {

  name: Profile = new Profile();
  details: Array<Profile> = new Array();
  photo: Profile = new Profile();
  loading: boolean = true;

  readonly constants = Constants;

  constructor(private mProfileSvc: MProfileService, private respUtil: ResponseUtil, private infoSvc: InformationService) {

  }

  ngOnInit(): void {
    this.init();
  }

  init() {
    const content = this.infoSvc.getProfiles();

    _.forEach(content, (value) => {
      switch (value.type) {
        case 'NAME':
          this.name = value;
          break;

        case 'PHOTO':
          this.photo = value;
          break;

        case 'DETAILS':
          this.details.push(value);
          break;
      }
    })
  }

  getDisplay() {
    this.mProfileSvc.display().subscribe((resp: any) => {

      this.loading = false;

      this.respUtil.load(resp, (content: any) => {

        _.forEach(content, (value) => {
          switch (value.type) {
            case 'NAME':
              this.name = value;
              break;

            case 'PHOTO':
              this.photo = value;
              break;

            case 'DETAILS':
              this.details.push(value);
              break;
          }
        })

      });
    })
  }

}

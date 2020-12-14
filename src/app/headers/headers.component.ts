import { Component, OnInit } from '@angular/core';
import { MProfileService } from '../m-profile/m-profile.service';
import { Profile } from '../model/profile';
import { ResponseUtil } from '../util/response.util';
import * as _ from "lodash";
import { Constants } from '../model/constants';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.scss']
})
export class HeadersComponent implements OnInit {

  name: Profile = new Profile();
  details: Array<Profile> = new Array();
  photo: Profile = new Profile();

  readonly constants = Constants;

  constructor(private mProfileSvc: MProfileService, private respUtil: ResponseUtil) {

  }

  ngOnInit(): void {
    this.getDisplay();
  }

  getDisplay() {
    this.mProfileSvc.display().subscribe((resp: any) => {

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

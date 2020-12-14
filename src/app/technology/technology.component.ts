import { Component, OnInit } from '@angular/core';
import { TechnologyService } from './technology.service';
import { Constants } from '../model/constants';
import { Technology } from '../model/technology';
import { MTechService } from '../m-tech/m-tech.service';
import { ResponseUtil } from '../util/response.util';
import * as _ from "lodash";
import { InformationService } from '../services/information.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {

  languages: Array<Technology>;
  frameworks: Array<Technology>;
  tools: Array<Technology>;

  readonly constants = Constants;

  constructor(private mTechSvc: MTechService, private respUtil: ResponseUtil, private infoSvc: InformationService) {
    this.languages = new Array();
    this.frameworks = new Array();
    this.tools = new Array();
  }

  ngOnInit(): void {
    this.init();
  }

  init() {
    const content = this.infoSvc.getTechs();

    _.forEach(content, (value) => {
      switch (value.type) {
        case "LANGUAGES":
          this.languages.push(value);
          break;

        case "FRAMEWORKS":
          this.frameworks.push(value);
          break;

        case "TOOLS":
          this.tools.push(value);
          break;
      }
    });
  }

  getDisplay = () => {

    this.mTechSvc.display().subscribe((resp: any) => {
      this.respUtil.load(resp, (content: any) => {
        _.forEach(content, (value) => {
          switch (value.type) {
            case "LANGUAGES":
              this.languages.push(value);
              break;

            case "FRAMEWORKS":
              this.frameworks.push(value);
              break;

            case "TOOLS":
              this.tools.push(value);
              break;
          }
        });

      });
    })
    // this.techSvc.getTechnologyList().subscribe((resp: any) => {

    //   this.languages = resp.language;
    //   this.frameworks = resp.framework;
    //   this.tools = resp.tools;
    // });
  }

}

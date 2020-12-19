import { Component, OnInit } from '@angular/core';
import { Technology } from '../model/technology';
import { MTechService } from './m-tech.service';
import { AlertUtil } from '../util/alert.util';
import { ResponseUtil } from '../util/response.util';
import { Constants } from '../model/constants';


@Component({
  selector: 'app-m-tech',
  templateUrl: './m-tech.component.html',
  styleUrls: ['./m-tech.component.scss']
})
export class MTechComponent implements OnInit {

  languages: Array<Technology> = new Array();
  frameworks: Array<Technology> = new Array();
  tools: Array<Technology> = new Array();

  readonly constants = Constants;


  constructor(private mTechSvc: MTechService, private alertUtil: AlertUtil, private responseUtil: ResponseUtil) { }

  ngOnInit(): void {
    this.findAll();
  }

  onAddLanguage() {
    this.languages.push(new Technology('A', 'LANGUAGES'));
  }

  onAddFramework() {
    this.frameworks.push(new Technology('A', 'FRAMEWORKS'));
  }

  onAddTool() {
    this.tools.push(new Technology('A', 'TOOLS'));
  }

  onDeleteLanguage(language: Technology, i: any) {

    if (!language.id) {
      this.languages.splice(i, 1);
    } else {
      this.alertUtil.deleteOnClick(() => {

        this.mTechSvc.deleteById(language.id).subscribe((resp: any) => {

          this.responseUtil.response(resp, (content) => {
            this.populate(content);
          })
        });

      });
    }
  }

  onDeleteFramework(framework: Technology, i: any) {

    if (!framework.id) {
      this.frameworks.splice(i, 1);
    } else {
      this.alertUtil.deleteOnClick(() => {

        this.mTechSvc.deleteById(framework.id).subscribe((resp: any) => {

          this.responseUtil.response(resp, (content) => {
            this.populate(content);
          })
        });

      });
    }

  }

  onDeleteTool(tool: Technology, i: any) {
    if (!tool.id) {
      this.tools.splice(i, 1);
    } else {
      this.alertUtil.deleteOnClick(() => {

        this.mTechSvc.deleteById(tool.id).subscribe((resp: any) => {

          this.responseUtil.response(resp, (content) => {
            this.populate(content);
          })
        });

      });
    }
  }

  onSubmit() {

    const data = new Array();

    Object.entries(this.languages).forEach(([key, value]) => {
      if (value.name) {
        value.seq = parseInt(key) + 1;
        data.push(value);
      }
    });

    Object.entries(this.frameworks).forEach(([key, value]) => {
      if (value.name) {
        value.seq = parseInt(key) + 1;
        data.push(value);
      }
    });

    Object.entries(this.tools).forEach(([key, value]) => {
      if (value.name) {
        value.seq = parseInt(key) + 1;
        data.push(value);
      }
    });

    if (data.length === 0) {
      alert('No data inserted');
      return;
    }

    this.alertUtil.submitOnClick(() => {

      this.mTechSvc.doSubmit(data).subscribe((resp: any) => {

        this.responseUtil.response(resp, (content) => {
          this.populate(content);
        });

      })
    });
  }

  findAll() {
    this.mTechSvc.findAll().subscribe((resp: any) => {

      this.responseUtil.load(resp, (content) => {
        this.populate(content);
      });

    })
  }

  populate(techs: Array<Technology>) {

    if (techs) {
      this.languages = new Array();
      this.frameworks = new Array();
      this.tools = new Array();

      techs.forEach((value) => {

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

  }

  setToggle(i, type, event) {
    if (event.checked) {
      switch (type) {
        case "LANGUAGES":
          this.languages[i].active = 'A';
          break;

        case "FRAMEWORKS":
          this.frameworks[i].active = 'A';
          break;

        case "TOOLS":
          this.tools[i].active = 'A';
          break;
      }
    } else {
      switch (type) {
        case "LANGUAGES":
          this.languages[i].active = 'X';
          break;

        case "FRAMEWORKS":
          this.frameworks[i].active = 'X';
          break;

        case "TOOLS":
          this.tools[i].active = 'X';
          break;
      }
    }
  }

}

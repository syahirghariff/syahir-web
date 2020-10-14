import { Component, OnInit } from '@angular/core';
import { Technology } from '../model/technology';
import { MTechService } from './m-tech.service';
import Swal from 'sweetalert2/src/sweetalert2.js';
import { AlertUtil } from '../util/alert.util';
import { ResponseUtil } from '../util/response.util';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-m-tech',
  templateUrl: './m-tech.component.html',
  styleUrls: ['./m-tech.component.scss']
})
export class MTechComponent implements OnInit {

  languages: Array<Technology> = new Array();
  frameworks: Array<Technology> = new Array();
  tools: Array<Technology> = new Array();

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

          this.responseUtil.response(resp.status, () => {
            const res = resp.content;
            this.populate(res);
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

          this.responseUtil.response(resp.status, () => {
            const res = resp.content;
            this.populate(res);
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

          this.responseUtil.response(resp.status, () => {
            const res = resp.content;
            this.populate(res);
          })
        });

      });
    }
  }

  onSubmit() {

    const data = new Array();

    this.languages.forEach(value => {
      data.push(value);
    });

    this.frameworks.forEach(value => {
      data.push(value);
    });

    this.tools.forEach(value => {
      data.push(value);
    });

    if (data.length === 0) {
      alert('No data inserted');
      return;
    }

    this.alertUtil.submitOnClick(() => {

      this.mTechSvc.doSubmit(data).subscribe((resp: any) => {

        this.responseUtil.response(resp.status, () => {
          const res = resp.content;
          this.populate(res);
        });

      })
    });
  }

  findAll() {
    this.mTechSvc.findAll().subscribe((resp: any) => {

      this.responseUtil.load(resp.status, () => {

        const res = resp.content;
        this.populate(res);
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


}

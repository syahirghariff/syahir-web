import { Component, OnInit } from '@angular/core';
import { General } from '../model/general';
import { GeneralService } from '../services/general.service';
import { AlertUtil } from '../util/alert.util';
import { ResponseUtil } from '../util/response.util';

@Component({
  selector: 'app-m-svg',
  templateUrl: './m-svg.component.html',
  styleUrls: ['./m-svg.component.scss']
})
export class MSvgComponent implements OnInit {

  svg: General = new General('SVG');

  constructor(private generalSvc: GeneralService, private alertUitl: AlertUtil, private responseUtil: ResponseUtil) { }

  ngOnInit(): void {
    this.findByCode();
  }

  onSubmit() {

    const data = Object.assign({}, this.svg);

    if (!data.desc) {
      alert('Please insert code');
      return;
    } else {
      data.desc = btoa(this.svg.desc);
    }

    this.alertUitl.submitOnClick(() => {
      this.generalSvc.doSubmit(data).subscribe((resp: any) => {
        this.responseUtil.response(resp.status, () => {
          const res = resp.content;
          this.svg = res;
          this.svg.desc = atob(res.desc);
        });
      })
    });
  }

  findByCode() {

    this.generalSvc.findByCode('SVG').subscribe((resp: any) => {

      this.responseUtil.load(resp.status, () => {
        const res = resp.content;
        if (res) {
          this.svg = res;
          this.svg.desc = atob(res.desc);
        }

      });
    });

  }

}

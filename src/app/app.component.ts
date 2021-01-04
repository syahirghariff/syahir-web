import { Component, OnInit } from '@angular/core';
import { LoaderService } from './loader/loader.service';
import { MStatsService } from './m-stats/m-stats.service';
import { InformationService } from './services/information.service';
import { ResponseUtil } from './util/response.util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'syahir-web';
  ready: boolean = false;
  loading: boolean = true;

  constructor(private infoSvc: InformationService, private respUtil: ResponseUtil, private mStatsSvc: MStatsService) {

  }

  ngOnInit(): void {
    this.getDisplay();
    this.setApi();
    this.checkLoading();
  }

  checkLoading() {
    if (!this.ready) {
      setInterval(() => {
        const error = sessionStorage.getItem('error');
        sessionStorage.removeItem('error');

        if (error === 'true') {
          this.loading = false;
        }

      }, 1000);
    }
  }

  setApi() {
    this.mStatsSvc.getApi().subscribe((resp: any) => {
      this.mStatsSvc.setApi(resp);
    });
  }

  getDisplay() {
    this.infoSvc.display().subscribe((resp: any) => {
      this.respUtil.load(resp, (content: any) => {
        this.infoSvc.setDisplay(content);
        this.ready = true;
        this.loading = false;
      });
    });
  }

  testConnection() {
    this.infoSvc.test().subscribe((resp: any) => {
      this.respUtil.load(resp, (content: any) => {
        this.ready = true;
        this.loading = false;
      });
    });
  }

}

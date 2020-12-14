import { Component, OnInit } from '@angular/core';
import { LoaderService } from './loader/loader.service';
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

  constructor(private infoSvc: InformationService, private respUtil: ResponseUtil) {

  }

  ngOnInit(): void {
    this.getDisplay();
  }

  getDisplay() {
    this.infoSvc.display().subscribe((resp: any) => {
      this.respUtil.load(resp, (content: any) => {
        this.infoSvc.setDisplay(content);
        this.ready = true;
      });
    });
  }

}

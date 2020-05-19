import { Component, OnInit } from '@angular/core';

import { TechnologyService } from './technology.service';

import { Technology } from '../model/technology';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {

  languages: Array<Technology>; 
  frameworks: Array<Technology>;
  tools: Array<Technology>;

  constructor(private techSvc : TechnologyService) {
    this.languages = new Array(); 
    this.frameworks = new Array(); 
    this.tools = new Array();
   }

  ngOnInit(): void {
    this.retrieveList();
  }

  retrieveList = () => {
    this.techSvc.getTechnologyList().subscribe( (resp:any) => {

      this.languages = resp.language; 
      this.frameworks = resp.framework; 
      this.tools = resp.tools; 
    });
  }

}

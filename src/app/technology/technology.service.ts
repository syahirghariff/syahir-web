import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Technology } from '../model/technology';

@Injectable({
    providedIn: 'root'
  })
export class TechnologyService {

    languages: Array<Technology>;

    constructor(private http: HttpClient ) {
    }

    getTechnologyList (){
        return this.http.get('http://192.168.1.11:4200/assets/sg_technology.json');
    }

    getLanguages() {

        this.getTechnologyList().subscribe( (resp:any) => {
            this.languages = resp.language; 
        });

        return  this.languages;
    }

}
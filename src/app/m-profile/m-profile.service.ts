import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from '../model/profile';

@Injectable({
    providedIn: 'root'
  })
export class MProfileService{

    constructor(private http: HttpClient) {

    }

    doSubmit(data:Array<Profile>) {
        data.forEach((value)=>{
            var token = sessionStorage.getItem('userToken');
            value.token = token;
        });
        
        return this.http.post('/syahirghariff/profile/do_submit', data);
    }

    
    findAll() {
        return this.http.get('/syahirghariff/profile/find_all');
    }
}
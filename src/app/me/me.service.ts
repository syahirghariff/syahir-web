import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';

@Injectable({
    providedIn: 'root'
  })
export class MeService{

    constructor(private http: HttpClient) {

    }

    doLogin(data:any) {
        return this.http.post('/syahirghariff/user/do_login',data);
    }
}
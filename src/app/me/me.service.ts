import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MainUser } from '../interface/main-user';

@Injectable({
    providedIn: 'root'
  })
export class MeService{

    constructor(private http: HttpClient) {

    }

    doLogin(data:MainUser) {
        return this.http.post<MainUser>('/syahirghariff/user/do_login', data);
    }
}
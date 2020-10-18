import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { General } from '../model/general';

@Injectable({
    providedIn: 'root'
})
export class GeneralService {

    options = {};

    constructor(private http: HttpClient) {
        const header = new HttpHeaders().set("Authorization", sessionStorage.getItem('userToken'));
        this.options = {
            headers: header
        }
    }

    doSubmit(data: General) {
        return this.http.post('/syahirghariff/general/do_submit', data, this.options);
    }

    findByCode(code) {
        return this.http.post('/syahirghariff/general/get_by_code', code);
    }
}
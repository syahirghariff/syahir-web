import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Education } from '../model/education';

@Injectable({
    providedIn: 'root'
})
export class MEducationService {

    options = {};

    constructor(private http: HttpClient) {

        const header = new HttpHeaders().set("Authorization", sessionStorage.getItem('userToken'));
        this.options = {
            headers: header
        }
    }

    doSubmit(data: Array<Education>) {
        return this.http.post('/syahirghariff/education/do_submit', data, this.options);
    }


    findAll() {
        return this.http.get('/syahirghariff/education/find_all');
    }

    deleteById(id: string) {
        return this.http.post('/syahirghariff/education/delete_by_id', id, this.options);
    }
}
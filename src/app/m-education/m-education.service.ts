import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Education } from '../model/education';

@Injectable({
    providedIn: 'root'
})
export class MEducationService {

    constructor(private http: HttpClient) {
    }

    doSubmit(data: Array<Education>) {
        return this.http.post('/syahirghariff/education/do_submit', data);
    }

    findAll() {
        return this.http.get('/syahirghariff/education/find_all');
    }

    deleteById(id: string) {
        return this.http.post('/syahirghariff/education/delete_by_id', id);
    }

    display() {
        return this.http.get('/syahirghariff/education/display');
    }
}
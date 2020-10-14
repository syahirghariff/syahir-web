import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Profile } from '../model/profile';

@Injectable({
    providedIn: 'root'
})
export class MTechService {

    options = {};

    constructor(private http: HttpClient) {
        const header = new HttpHeaders().set("Authorization", sessionStorage.getItem('userToken'));
        this.options = {
            headers: header
        }
    }

    doSubmit(data: Array<Profile>) {
        return this.http.post('/syahirghariff/tech/do_submit', data, this.options);
    }

    findAll() {
        return this.http.get('/syahirghariff/tech/find_all');
    }

    deleteById(id) {
        return this.http.post('/syahirghariff/tech/delete_by_id', id, this.options);
    }
}
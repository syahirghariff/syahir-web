import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Technology } from '../model/technology';

@Injectable({
    providedIn: 'root'
})
export class MTechService {

    constructor(private http: HttpClient) {
    }

    doSubmit(data: Array<Technology>) {
        return this.http.post('/syahirghariff/tech/do_submit', data);
    }

    findAll() {
        return this.http.get('/syahirghariff/tech/find_all');
    }

    deleteById(id) {
        return this.http.post('/syahirghariff/tech/delete_by_id', id);
    }
}
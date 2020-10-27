import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Profile } from '../model/profile';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MProfileService {

    constructor(private http: HttpClient) {
    }

    doSubmit(data: Array<Profile>) {
        return this.http.post('/syahirghariff/profile/do_submit', data);
    }


    findAll() {
        return this.http.get('/syahirghariff/profile/find_all');
    }

    deleteById(id) {
        return this.http.post('/syahirghariff/profile/delete_by_id', id);
    }
}
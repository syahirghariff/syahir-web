import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Profile } from '../model/profile';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Job } from '../model/job';

@Injectable({
    providedIn: 'root'
})
export class MExperienceService {

    constructor(private http: HttpClient) {
    }

    doSubmit(data: Array<Job>) {
        return this.http.post('/syahirghariff/job/do_submit', data);
    }


    findAll() {
        return this.http.get('/syahirghariff/job/find_all');
    }

    deleteById(id) {
        return this.http.post('/syahirghariff/job/delete_by_id', id);
    }
}
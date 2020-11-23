import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Profile } from '../model/profile';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MStatsService {

    constructor(private http: HttpClient) {
    }

    findAll() {
        return this.http.get('/syahirghariff/stats/find_all');
    }
}
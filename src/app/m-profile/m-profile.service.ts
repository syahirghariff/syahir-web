import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Profile } from '../model/profile';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MProfileService {

    options = {};

    constructor(private http: HttpClient) {
        const header = new HttpHeaders().set("Authorization", sessionStorage.getItem('userToken'));
        this.options = {
            headers: header
        }
    }

    doSubmit(data: Array<Profile>) {
        return this.http.post('/syahirghariff/profile/do_submit', data, this.options);
    }


    findAll() {
        return this.http.get('/syahirghariff/profile/find_all').pipe(
            catchError(this.handleError)
        );
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // Return an observable with a user-facing error message.
        return throwError(
            'Something bad happened; please try again later.');
    }

    deleteById(id) {
        return this.http.post('/syahirghariff/profile/delete_by_id', id, this.options);
    }
}
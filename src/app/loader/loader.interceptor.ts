import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { LoaderService } from './loader.service';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { AlertUtil } from '../util/alert.util';


@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

    constructor(public loaderSvc: LoaderService, private alertUtil: AlertUtil) {

    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        this.loaderSvc.show();

        const token: string = sessionStorage.getItem('userToken');

        if (token) {
            var headers = request.headers.set('Authorization', token);
            request = request.clone({ headers: headers });
        }

        return next.handle(request).pipe(
            finalize(() => this.loaderSvc.hide()),
            catchError((error: any) => {
                this.alertUtil.error(error.statusText);
                return throwError(error);
            })
        );
    }
}
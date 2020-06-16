import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { LoaderService } from './loader.service';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Injectable } from "@angular/core";


@Injectable()
export class LoaderInterceptor implements HttpInterceptor{

    constructor(public loaderSvc: LoaderService) {

    }

    intercept(req: HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>>{

        this.loaderSvc.show();
        return next.handle(req).pipe(
            finalize(() => this.loaderSvc.hide() )
        );
    }
}
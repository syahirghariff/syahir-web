import { Injectable } from '@angular/core';
import Swal from 'sweetalert2/src/sweetalert2.js';
import { Response } from '../model/response';


@Injectable({
    providedIn: 'root'
})
export class ResponseUtil {

    response(resp: Response, callBack: any) {
        switch (resp.status) {

            case "OK":
                Swal.fire({
                    icon: 'success',
                    title: 'Data has been successfully updated'
                })

                if (callBack) {
                    callBack(resp.content);
                }
                break;

            case "UNAUTHORIZED":
                Swal.fire({
                    icon: 'warning',
                    title: 'You\'re not authorized user'
                })
                break;

            case "NOT_FOUND":
                Swal.fire({
                    icon: 'error',
                    title: ' Cannot be found '
                });
                break;

            default:
                Swal.fire({
                    icon: 'error',
                    title: ' There is problem in saving your data'
                });
        }
    }


    load(resp: Response, callBack: any) {

        switch (resp.status) {
            case 'OK':
                if (callBack) {
                    callBack(resp.content);
                }
                break;

            case "UNAUTHORIZED":
                Swal.fire({
                    icon: 'warning',
                    title: 'You\'re not authorized user'
                })
                break;

            case "NOT_FOUND":
                Swal.fire({
                    icon: 'error',
                    title: ' Cannot be found '
                });
                break;

            default:
                Swal.fire({
                    icon: 'error',
                    title: ' There is problem in retrieving data'
                });
        }

    }


    login(resp: Response, callBack: any) {
        switch (resp.status) {
            case "OK":
                Swal.fire({
                    icon: 'success',
                    title: 'Welcome'
                }).then((result: any) => {
                    if (result.value && callBack) {
                        callBack(resp.content);
                    }
                })
                break;

            default:
                Swal.fire({
                    icon: 'error',
                    title: ' Ooops!'
                });
        }
    }
}
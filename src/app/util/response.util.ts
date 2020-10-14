import { Injectable } from '@angular/core';
import Swal from 'sweetalert2/src/sweetalert2.js';


@Injectable({
    providedIn: 'root'
})
export class ResponseUtil {

    response(res: any, callBack: any) {
        switch (res) {

            case "OK":
                Swal.fire({
                    icon: 'success',
                    title: 'Data has been successfully updated'
                })

                if (callBack) {
                    callBack();
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


    load(res: any, callBack: any) {
        switch (res) {
            case "OK":
                if (callBack) {
                    callBack();
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
}
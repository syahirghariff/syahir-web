
import { Injectable } from '@angular/core';
import Swal from 'sweetalert2/src/sweetalert2.js';

@Injectable({
  providedIn: 'root'
})
export class AlertUtil {

  submitOnClick(callBack) {
    Swal.fire({
      title: 'Confirmation to Submit',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Submit'
    }).then((result: any) => {

      if (result.value && callBack) {
        callBack();
      }

    });
  }

  deleteOnClick(callBack) {
    Swal.fire({
      title: 'Confirmation to Delete',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Submit'
    }).then((result: any) => {

      if (result.value && callBack) {
        callBack();
      }

    })
  }
}
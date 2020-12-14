import { Component, OnInit } from '@angular/core';
import { Education } from '../model/education';
import { switchAll } from 'rxjs/operators';
import Swal from 'sweetalert2/src/sweetalert2.js';
import { MEducationService } from './m-education.service';
import { AlertUtil } from '../util/alert.util';
import { ResponseUtil } from '../util/response.util';

@Component({
  selector: 'app-m-education',
  templateUrl: './m-education.component.html',
  styleUrls: ['./m-education.component.scss']
})
export class MEducationComponent implements OnInit {

  educations: Array<Education> = new Array();

  constructor(private mEducationSvc: MEducationService, private alertUtil: AlertUtil, private responseUtil: ResponseUtil) { }

  ngOnInit(): void {
    this.findAll();
  }

  onAddEducation() {
    let education: Education = new Education('A');
    this.educations.push(education);
  }

  onDelete(education: Education, i: any) {

    if (!education.id) {
      this.educations.splice(i, 1);
    } else {

      this.alertUtil.submitOnClick(() => {

        this.mEducationSvc.deleteById(education.id).subscribe((resp: any) => {

          this.responseUtil.response(resp, (content) => {
            this.educations = content;
          })
        });
      });
    }
  }

  onUploadImage(event, index) {

    const file = event.target.files[0];
    const reader = new FileReader();
    var _this = this;

    if (file) {
      reader.readAsDataURL(file);
    }

    reader.addEventListener("load", () => {
      _this.educations[index].encodeImg = (reader.result as string).split(',')[1];
    });

  }

  onSubmit() {

    this.alertUtil.submitOnClick(() => {

      this.mEducationSvc.doSubmit(this.educations).subscribe((resp: any) => {

        this.responseUtil.response(resp, (content: any) => {
          this.educations = content;
        })

      });

    });
  }

  findAll() {

    this.mEducationSvc.findAll().subscribe((resp: any) => {
      this.responseUtil.load(resp, (content: any) => {
        this.educations = content;
      });

    })

  }

  setToggle(i, event) {
    if (event.checked) {
      this.educations[i].active = 'A';
    } else {
      this.educations[i].active = 'X';
    }
  }

}

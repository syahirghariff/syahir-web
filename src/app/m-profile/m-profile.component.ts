import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Profile } from '../model/profile';
import Swal from 'sweetalert2/src/sweetalert2.js';
import { MProfileService } from './m-profile.service';

@Component({
  selector: 'app-m-profile',
  templateUrl: './m-profile.component.html',
  styleUrls: ['./m-profile.component.scss']
})
export class MProfileComponent implements OnInit {

  name:Profile = new Profile('NAME', 'A');
  details:Array<Profile> = new Array();
  photo:Profile = new Profile('PHOTO', 'A', '', 'GAMBAR SYAHIR');

  constructor(private mProfileSvc: MProfileService) { 
  }

  ngOnInit(): void {
    this.findAll();
  }

  onAddDetails() {
    let detail:Profile = new Profile('DETAILS', 'A', '../../assets/sprite.svg#');
    this.details.push(detail);
  }

  onSubmit(){
    let data:Array<Profile> = Object.assign(new Array(), this.details);
    data.push(this.name);
    data.push(this.photo);

    Swal.fire({
      title: 'Confirmation to submit',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Submit'
    }).then((result:any) => {
      if (result.value) {
        this.mProfileSvc.doSubmit(data).subscribe((resp:any) => {
          
          switch(resp.status) {
            
            case "OK":

            var res = resp.content;

            if (res.length > 0) {
              Swal.fire({
                icon: 'success',
                title: 'Profile data has been successfully updated'
              })

              this.details = new Array();

              res.forEach(value => {
                switch(value.type){
                  case 'NAME': 
                  this.name = new Profile();
                  this.name = value; 
                  break; 

                  case 'PHOTO': 
                  this.photo = new Profile(); 
                  this.photo = value; 
                  break; 

                  case 'DETAILS':
                    this.details.push(value);
                    break;
                }
              });
            }

            if (res === null ) {
              Swal.fire({
                icon: 'error',
                title: ' There is problem in saving your data'
              })
            }

            if (res === false) {
              Swal.fire({
                icon: 'warning',
                title: 'You\'re not authorized user'
              })
            }
            break;

            default: 
            Swal.fire({
              icon: 'error',
              title: ' There is problem in saving your data'
            })
            break;

          }

        });
      }
    })
  }

  onDelete(detail:Profile, i:any){

    if (!detail.id) {
      this.details.splice(i, 1);
    } else {
      alert('Function is not ready yet');
    }
  }

  onUploadImage(event){
    const file = event.target.files[0];
    const reader = new FileReader();
    var _this = this; 

    if (file) {
      reader.readAsDataURL(file);
    }

    reader.addEventListener("load", function () {
      _this.photo.encodeImg = (reader.result as string).split(',')[1];
    }, false);

  }


  findAll(){
    this.mProfileSvc.findAll().subscribe((resp:any) => {

      switch(resp.status){

        case "OK":

        var res = resp.content; 
        
        if(res.length > 0) {
          console.log('syahir res', res);

          res.forEach(value => {
              switch(value.type){
                case 'NAME': 
                this.name = new Profile();
                this.name = value; 
                break; 

                case 'PHOTO': 
                this.photo = new Profile(); 
                this.photo = value; 
                break; 

                case 'DETAILS':
                  this.details.push(value);
                  break;
              }
          });
        }

        break;
        
        default:
          Swal.fire({
            icon: 'error',
            title: ' There is problem in loading all data'
          });

      }
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MeService } from './me.service';
import { MainUser } from '../interface/main-user';
import { LoaderService } from '../loader/loader.service';
import Swal from 'sweetalert2/src/sweetalert2.js';


declare var $: any;

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.scss']
})



export class MeComponent implements OnInit {

  loginForm;
  isUserLogged: string = 'false';
  isProfile: boolean;
  isEducation: boolean;
  isTech: boolean;
  isExperience: boolean;
  isLoginTrx: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private meSvc: MeService,
    private loaderSvc: LoaderService
  ) {
    
    this.loginForm = this.formBuilder.group({
      username: null,
      password: null
    });


  }

  ngOnInit(): void {

    var sessUserLoggged = sessionStorage.getItem('userLogged');

    if (sessUserLoggged) {
      this.isUserLogged = sessionStorage.getItem('userLogged');
    }
    this.isProfile = false;
    this.isEducation = false;
    this.isTech = true;
    this.isExperience = false;
    this.isLoginTrx = false;
  }

  onSubmit(data: MainUser) {
    this.meSvc.doLogin(data).subscribe((resp: any) => {

      switch (resp.status) {

        case "OK":
          var res = resp.content;

          if (res.login === true) {
            Swal.fire({
              icon: 'success',
              title: 'Welcome!'
            })
            sessionStorage.setItem('userLogged', res.login);
            sessionStorage.setItem('userToken', res.userToken);
            this.isUserLogged = sessionStorage.getItem('userLogged');

            window.scrollTo(0, 0)
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...'
            })
          }

          break;

        default:
          this.loginForm.reset();

      }
    });

  }


  onLogout() {
    Swal.fire({
      icon: 'success',
      title: 'Logout Successful!'
    })

    this.isProfile = false;
    this.isEducation = false;
    this.isTech = false;
    this.isExperience = false;
    this.isLoginTrx = false;

    this.isUserLogged = 'false';
    sessionStorage.clear();

  }


  onMenuClick(menu: string) {

    this.isProfile = false;
    this.isEducation = false;
    this.isTech = false;
    this.isExperience = false;
    this.isLoginTrx = false;

    switch (menu) {
      case "profile":
        this.isProfile = true;
        setTimeout( () => {
          $('#profile').show('250');
        });
        break;

      case "education":
        this.isEducation = true;
        setTimeout( () => {
          $('#education').show('250');
        });
        break;

      case "tech":
        this.isTech = true;
        setTimeout(() => {
          $('#tech').show('250');
        })
        break;

      case "experience":
        this.isExperience = true;
        break;

      case "loginTrx":
        this.isLoginTrx = true;
        break;

    }

  }

}

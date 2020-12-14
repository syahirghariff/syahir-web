import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MeService } from './me.service';
import { MainUser } from '../interface/main-user';
import { LoaderService } from '../loader/loader.service';
import Swal from 'sweetalert2/src/sweetalert2.js';
import { AlertUtil } from '../util/alert.util';
import { ResponseUtil } from '../util/response.util';


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
  isSvg: boolean;
  isStats: boolean;
  role: string;

  constructor(
    private formBuilder: FormBuilder,
    private meSvc: MeService,
    private loaderSvc: LoaderService,
    private responseUtil: ResponseUtil
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
      this.role = sessionStorage.getItem('userRole');
    }
    this.isProfile = true;
    this.isEducation = false;
    this.isTech = false;
    this.isExperience = false;
    this.isStats = false;
    this.isSvg = false;
  }

  onSubmit(data: MainUser) {
    this.meSvc.doLogin(data).subscribe((resp: any) => {

      this.responseUtil.login(resp, (content) => {
        sessionStorage.setItem('userLogged', 'true');
        sessionStorage.setItem('userToken', content.userToken);
        sessionStorage.setItem('userRole', content.role);

        // local
        this.isUserLogged = sessionStorage.getItem('userLogged');
        this.role = sessionStorage.getItem('userRole');

        window.scrollTo(0, 0);
        //this.loginForm.reset();
      });
    });

  }


  onLogout() {
    Swal.fire({
      icon: 'success',
      title: 'Logout Successful!'
    }).then((result: any) => {
      if (result.value) {
        this.isProfile = true;
        this.isEducation = false;
        this.isTech = false;
        this.isExperience = false;
        this.isStats = false;
        this.isSvg = false;

        this.isUserLogged = 'false';
        sessionStorage.clear();
      }
    })



  }


  onMenuClick(menu: string) {

    this.isProfile = false;
    this.isEducation = false;
    this.isTech = false;
    this.isExperience = false;
    this.isStats = false;
    this.isSvg = false;

    switch (menu) {
      case "profile":
        this.isProfile = true;
        setTimeout(() => {
          $('#profile').show('250');
        });
        break;

      case "education":
        this.isEducation = true;
        setTimeout(() => {
          $('#education').show('250');
        });
        break;

      case "tech":
        this.isTech = true;
        setTimeout(() => {
          $('#tech').show('250');
        })
        break;

      case "svg":
        this.isSvg = true;
        setTimeout(() => {
          $('#svg').show('250');
        });
        break;

      case "experience":
        this.isExperience = true;
        setTimeout(() => {
          $('#experience').show('250');
        })
        break;

      case "loginTrx":
        this.isStats = true;
        break;

    }

  }

}

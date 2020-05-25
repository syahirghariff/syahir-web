import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { MeService } from './me.service';
import { User } from '../model/user';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.scss']
})
export class MeComponent implements OnInit {

  loginForm; 

  constructor(private formBuilder : FormBuilder, private meSvc: MeService) { 

    this.loginForm = this.formBuilder.group({
      username: null,
      password: null
    });


  }

  ngOnInit(): void {
  }

  onSubmit(data:any){
    this.meSvc.doLogin(data).subscribe( (output:any) => {
      console.log('output', output);
    });
    this.loginForm.reset();

  }

}

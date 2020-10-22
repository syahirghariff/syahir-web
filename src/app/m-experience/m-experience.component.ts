import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-m-experience',
  templateUrl: './m-experience.component.html',
  styleUrls: ['./m-experience.component.scss']
})
export class MExperienceComponent implements OnInit {

  data: String;
  config: any;

  constructor() {
    this.data = '<p>Hello, world!</p>';
    this.config = {
      extraPlugins: [this.imagePluginFactory]
    }
  }

  ngOnInit(): void {
  }

  imagePluginFactory(editor) {
    // editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
    //   return new Base64UploadAdapter(loader);
    // };
  }



}

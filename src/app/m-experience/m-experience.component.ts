import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Base64UploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter';


@Component({
  selector: 'app-m-experience',
  templateUrl: './m-experience.component.html',
  styleUrls: ['./m-experience.component.scss']
})
export class MExperienceComponent implements OnInit {

  data: String;
  config: any;

  public Editor = ClassicEditor;

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

import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderService } from './loader.service';
import { LoaderState } from './Loader-State';
@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  loading = false;

  private subscription: Subscription;
  
  constructor(private loaderService: LoaderService) { }

  ngOnInit() {
    this.subscription = this.loaderService.loaderState
      .subscribe((state: LoaderState) => {
        this.loading = state.show;
      });
  }
}
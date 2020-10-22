import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadersComponent } from './headers/headers.component';
import { TechnologyComponent } from './technology/technology.component';
import { FooterComponent } from './footer/footer.component';
import { EducationComponent } from './education/education.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ExperienceComponent } from './experience/experience.component';
import { RouterModule } from '@angular/router';
import { MeComponent } from './me/me.component';
import { TestComponentRenderer } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoaderComponent } from './loader/loader.component';
import { LoaderService } from './loader/loader.service';
import { LoaderInterceptor } from './loader/loader.interceptor';
import { MProfileComponent } from './m-profile/m-profile.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MEducationComponent } from './m-education/m-education.component';
import { MTechComponent } from './m-tech/m-tech.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatExpansionModule } from '@angular/material/expansion';
import { SortablejsModule } from 'ngx-sortablejs';
import { MSvgComponent } from './m-svg/m-svg.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ExperienceDetailsComponent } from './experience-details/experience-details.component';
import { MExperienceComponent } from './m-experience/m-experience.component';
import { QuillModule } from 'ngx-quill';


@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    TechnologyComponent,
    FooterComponent,
    EducationComponent,
    ExperienceComponent,
    MeComponent,
    LoaderComponent,
    MProfileComponent,
    MEducationComponent,
    MTechComponent,
    MSvgComponent,
    ExperienceDetailsComponent,
    MExperienceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatIconModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatDialogModule,
    QuillModule.forRoot(),
    SortablejsModule.forRoot({ animation: 150, ghostClass: 'ghost-class', dragClass: 'drag-class' }),
    RouterModule.forRoot([
      { path: '', component: HeadersComponent },
      { path: 'me', component: MeComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ])
  ],
  providers: [LoaderService, { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }

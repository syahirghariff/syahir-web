import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadersComponent } from './headers/headers.component';
import { TechnologyComponent } from './technology/technology.component';
import { FooterComponent } from './footer/footer.component';
import { EducationComponent } from './education/education.component';

import { HttpClientModule } from '@angular/common/http';
import { ExperienceComponent } from './experience/experience.component';
import { RouterModule } from '@angular/router';
import { MeComponent } from './me/me.component';
import { TestComponentRenderer } from '@angular/core/testing';
import { Technology } from './model/technology';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    TechnologyComponent,
    FooterComponent,
    EducationComponent,
    ExperienceComponent,
    MeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'', component: HeadersComponent},
      {path:'me', component: MeComponent},
      {path:'**', redirectTo: '', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

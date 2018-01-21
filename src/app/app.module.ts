import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { StackComponent } from './stack/stack.component';
import {ValidationService} from './contact/validation.service';
import {ContactService} from './contact/contact.service';
import {globalRoutes} from './app.routes';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {Router, RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    FaqComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    ContactComponent,
    ProjectsComponent,
    StackComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    globalRoutes
  ],
  providers: [
    ValidationService,
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

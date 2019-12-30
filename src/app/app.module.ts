import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule , HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { LayoutComponent } from './layout/layout.component';
import { DropDownDirective } from './shared/drop-down.directive';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventItemComponent } from './events/event-list/event-item/event-item.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { ProjectItemComponent } from './projects/project-list/project-item/project-item.component';
import { PublicationsComponent } from './publications/publications.component';
import { PublicationListComponent } from './publications/publication-list/publication-list.component';
import { PublicationItemComponent } from './publications/publication-list/publication-item/publication-item.component';
import { EventsComponent } from './events/events.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { EventEditComponent } from './events/event-edit/event-edit.component';
import { PaginationDirective } from './shared/pagination.directive';
import { TockenInterceptorService } from './auth/tocken-interceptor.service';
import { PublicationDetailComponent } from './publications/publication-detail/publication-detail.component';
import { PublicationEditComponent } from './publications/publication-edit/publication-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    LayoutComponent,
    DropDownDirective,
    EventListComponent,
    EventItemComponent,
    ProjectsComponent,
    ProjectListComponent,
    ProjectItemComponent,
    PublicationsComponent,
    PublicationListComponent,
    PublicationItemComponent,
    EventsComponent,
    EventDetailComponent,
    EventEditComponent,
    PaginationDirective,
    PublicationDetailComponent,
    PublicationEditComponent
  ],
  imports: [
  BrowserModule,
  AppRoutingModule,
  HttpClientModule
],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TockenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

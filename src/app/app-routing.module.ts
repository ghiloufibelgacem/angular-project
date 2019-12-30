import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { PublicationsComponent } from './publications/publications.component';
import { ProjectsComponent } from './projects/projects.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { EventEditComponent } from './events/event-edit/event-edit.component';

/* the app routes */
const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{
		path: 'home',
		component: HomeComponent,
		children: [ { path: 'login', component: LoginComponent }, { path: 'register', component: RegisterComponent } ]
	},
	{
		path: 'events',
		component: EventsComponent,
		children: [
			{ path: 'new', component: EventEditComponent },
			{ path: ':id', component: EventDetailComponent },
			{ path: ':id/edit', component: EventEditComponent }
		]
	},
	{ path: 'publications', component: PublicationsComponent },
	{ path: 'projects', component: ProjectsComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}

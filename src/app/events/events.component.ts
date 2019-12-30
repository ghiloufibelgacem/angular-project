import { Component, OnInit } from '@angular/core';

import { EVent } from '../shared/event.mode';
import { EventService } from './event.service';

@Component({
	selector: 'app-events',
	templateUrl: './events.component.html',
	styleUrls: [ './events.component.css' ]
})
export class EventsComponent implements OnInit {
	events: EVent[] = [];
	URL = 'http://127.0.0.1:8080/api/e-vents';
	constructor(private eventService: EventService) {}
	ngOnInit() // tslint:disable-next-line: one-line
	{
		this.eventService.events$.subscribe(
			(events: EVent[]) => {
				this.events = events;
				console.log(events);
			},
			(error) => {
				console.log(error);
			}
		);
		this.eventService.getEvents();
	}
}

import { Component, OnInit, Input } from '@angular/core';

import { EVent } from 'src/app/shared/event.mode';
import { ActivatedRoute, Params } from '@angular/router';
import { EventService } from './../event.service';

@Component({
	selector: 'app-event-detail',
	templateUrl: './event-detail.component.html',
	styleUrls: [ './event-detail.component.css' ]
})
export class EventDetailComponent implements OnInit {
	event: EVent;
	id: number;
	constructor(private router: ActivatedRoute, private eventService: EventService) {}
	ngOnInit() {
		this.router.params.subscribe((params: Params) => {
			this.id = +params.id;
			this.event = this.eventService.getEvent(this.id);
		});
	}
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { EVent } from '../../shared/event.mode';
import { EventService } from './../event.service';

@Component({
	selector: 'app-event-edit',
	templateUrl: './event-edit.component.html',
	styleUrls: [ './event-edit.component.css' ]
})
export class EventEditComponent implements OnInit {
	event: EVent;
	id: number;
	editMode = false;

	constructor(private route: ActivatedRoute, private eventService: EventService) {}

	ngOnInit() {
		this.route.params.subscribe((params: Params) => {
			this.id = +params.id;
			this.editMode = params.id != null;
			if (this.editMode) {
				this.event = this.eventService.getEvent(this.id);
			}
		});
	}
}

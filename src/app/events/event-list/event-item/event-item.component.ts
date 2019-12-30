import { Component, OnInit, Input } from '@angular/core';

import { EVent } from '../../../shared/event.mode';

@Component({
	selector: 'app-event-item',
	templateUrl: './event-item.component.html',
	styleUrls: [ './event-item.component.css' ]
})
export class EventItemComponent implements OnInit {
	@Input() event: EVent;
	@Input() index: number;
	constructor() {}
	ngOnInit() {}
}

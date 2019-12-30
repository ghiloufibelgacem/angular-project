import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { EVent } from '../shared/event.mode';

@Injectable({
	providedIn: 'root'
})
export class EventService {
	eventSelected = new EventEmitter<EVent>();
	events: EVent[] = [];
	events$ = new Subject<EVent[]>();
	switch = new EventEmitter<number>();
	URL = 'http://127.0.0.1:8080/api/e-vents';
	constructor(private http: HttpClient) {}
	getEvents() {
		this.http.get<EVent[]>(`${this.URL}?page=1&size=2`).subscribe((events: EVent[]) => {
			this.events = events;
			this.events$.next([ ...this.events ]);
		});
	}
	// TODO : how to make a copy of a object with JS/TS
	getEvent(index: number): EVent {
		return this.events.slice()[index];
	}
}

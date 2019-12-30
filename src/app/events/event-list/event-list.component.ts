import { Component, OnInit, Input } from '@angular/core';
import { EVent } from 'src/app/shared/event.mode';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  @Input() events: EVent[] ;
  constructor() {}
  ngOnInit() {}

}

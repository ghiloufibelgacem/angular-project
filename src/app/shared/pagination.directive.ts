import { Directive, HostListener, Input } from '@angular/core';

import { EventService } from '../events/event.service';
import {Request} from '../shared/Request.interface';
import { HttpClient } from '@angular/common/http';
import { EVent } from 'src/app/shared/event.mode';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[app-pagination]'
})
export class PaginationDirective {
  @Input('app-pagination') request: Request;
  @HostListener('click') onClick() {
     this.http.get<EVent[]>(`${this.request.url}?page=${this.request.page}&size=2`)
                    .subscribe((events: EVent[]) => {
                      this.eventService.events = events;
                      console.log(`events from pagination : ${events}`);
                      this.eventService.events$.next(events); },
                      (error) => {
                        console.log(error);
                      });
  }
  constructor(private eventService: EventService, private http: HttpClient) {}
}

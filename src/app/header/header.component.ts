import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  publicationIsClicked = true;
  eventIsClicked = true;
  projectIsClicked = true;

  constructor() {}

  ngOnInit() {}

  /* show hide notification */
  onPublicationClicked() {this.publicationIsClicked = false; }
  onEventClicked() {this.eventIsClicked = false; }
  onProjectsClicked() {this.projectIsClicked = false; }

}

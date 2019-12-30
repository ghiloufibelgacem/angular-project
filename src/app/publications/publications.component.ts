import { Component, OnInit } from '@angular/core';

import { Publication } from '../shared/publication.model';
import {Request} from '../shared/Request.interface';
import { PublicationService } from './publication.service';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {
  selectedPublication: Publication;
  publications: Publication[];
  switchValue = 1;
  req: Request = {url: 'eeeeeeee', page: 1};

  constructor(private publicationService: PublicationService) {}

  ngOnInit()
  // tslint:disable-next-line: one-line
  {
    this.publicationService.publicationSelected.subscribe((publication: Publication) => {
    this.selectedPublication = publication;
    });
    this.publicationService.switch.subscribe((value: number) => {
    this.switchValue = value;
    });
    this.publications = this.publicationService.getPublications();
  }

  onAddPublication() { this.publicationService.switch.emit(0); }

}

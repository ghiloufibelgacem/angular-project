import { Component, OnInit, Input } from '@angular/core';

import { Publication } from 'src/app/shared/publication.model';
import { PublicationService } from '../../publication.service';

@Component({
  selector: 'app-publication-item',
  templateUrl: './publication-item.component.html',
  styleUrls: ['./publication-item.component.css']
})
export class PublicationItemComponent implements OnInit {
  @Input() publication: Publication;
  constructor(private publicationService: PublicationService) {}
  ngOnInit() {}
  onSelect()
  // tslint:disable-next-line: one-line
  {
    this.publicationService.publicationSelected.emit(this.publication);
    this.publicationService.switch.emit(1);
  }

}

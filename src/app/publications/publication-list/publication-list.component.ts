import { Component, OnInit, Input } from '@angular/core';

import { Publication } from 'src/app/shared/publication.model';

@Component({
  selector: 'app-publication-list',
  templateUrl: './publication-list.component.html',
  styleUrls: ['./publication-list.component.css']
})
export class PublicationListComponent implements OnInit {
  @Input() publications: Publication[];

  constructor() {}

  ngOnInit() {}

}

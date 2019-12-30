import { Component, OnInit, Input } from '@angular/core';
import { Publication } from 'src/app/shared/publication.model';

@Component({
  selector: 'app-publication-detail',
  templateUrl: './publication-detail.component.html',
  styleUrls: ['./publication-detail.component.css']
})
export class PublicationDetailComponent implements OnInit {
  @Input() publication: Publication;
  constructor() {}

  ngOnInit() {}

}

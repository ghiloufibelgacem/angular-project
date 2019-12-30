import { Injectable, EventEmitter } from '@angular/core';

import { Publication } from '../shared/publication.model';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {
  publications: Publication[] = [];
  publicationSelected = new EventEmitter<Publication>();
  switch = new EventEmitter<number>();
  constructor() {
    const pub = new Publication('Spring Book', 'programmation', `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Pellentesque fringilla lacus sit amet augue vulputate porttitor.
    Nullam iaculis ipsum tempus, dignissim purus vitae, iaculis velit.
    Cras dui lacus, mattis quis tellus quis, rutrum ullamcorper metus.
    `, 'enis', new Date(), null);
    const pub2 = new Publication('Spring Book 2', 'programmation', `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Pellentesque fringilla lacus sit amet augue vulputate porttitor.
    Nullam iaculis ipsum tempus, dignissim purus vitae, iaculis velit.
    Cras dui lacus, mattis quis tellus quis, rutrum ullamcorper metus.
    `, 'enis', new Date(), null);
    this.publications.push(pub, pub2);
  }

  getPublications(): Publication[]
  // tslint:disable-next-line: one-line
  {
    return this.publications.slice();
  }
}

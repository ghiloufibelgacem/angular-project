export class Publication {
  constructor(public title: string, public type: string,
              public decription: string, public location: string,
              public date: Date, public pdfURL: string) {}
}

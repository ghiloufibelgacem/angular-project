import { Component, OnInit } from '@angular/core';

import { AuthService } from './auth/auth.service';
import { HttpClient } from '@angular/common/http';
// import { EVent } from './shared/event.mode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  date: Date = new Date();
  constructor(private auth: AuthService, private http: HttpClient)
  // tslint:disable-next-line: one-line
  {
    this.auth.setToken();
  }

  ngOnInit()
  // tslint:disable-next-line: one-line
  {
    this.ping();
  }

  public ping() {
    this.http.get('http://127.0.0.1:8080/api/e-vents?size=2')
      .subscribe(
        data => console.log(data),
        err => console.log(err)
      );
  }

}

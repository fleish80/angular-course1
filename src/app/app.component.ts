import {Component, OnInit} from '@angular/core';
import {User} from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-course1';

  id: number;
  user: User;

  ngOnInit(): void {
    this.id = 5;
    this.user = {
      id: 67,
      name: 'james johny'
    };
  }



}

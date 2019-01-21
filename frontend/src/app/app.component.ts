import { Component, OnInit } from '@angular/core';
import { AdvertService } from './advert.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // list of adverts
  public adverts: any;

  constructor(private advertService: AdvertService,
              private userService: UserService) { }

  ngOnInit() {
    this.getAdverts();
    console.log(this.adverts);
  }

  getAdverts() {
    this.advertService.list().subscribe(
      // the first argument is a function which runs on success
      data => {
        this.adverts = data;
      },
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => {
        console.log('done loading posts');
      }
    );
  }
}

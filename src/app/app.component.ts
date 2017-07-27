import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  myList;

  ngOnInit(): void {
    this.myList = [
      {label: "Tour of Heroes", link: "https://angular.io/tutorial"},
      {label: "CLI Documentation", link: "https://github.com/angular/angular-cli/wiki"},
      {label: "Angular blog", link: "http://angularjs.blogspot.ca/"},
    ];
  }
}

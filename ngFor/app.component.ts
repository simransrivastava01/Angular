import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  array = ['Angular','Node.js', 'ReactJs'];
  list = [ {
      "name" : "a",
      "status" : "learning Angular"
   },

   {
    "name" : "b",
    "status" : "learning Node.js"
   },

   {
    "name" : "c",
    "status" : "learning ReactJS"
   }
  ];
  }

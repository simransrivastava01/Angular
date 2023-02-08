import { Component } from '@angular/core';

@Component ({
   selector: 'app-root',
   templateUrl: './app.component.html'
})
export class AppComponent { 
   value:string = "Hello";
   newdate = new Date(2023, 1, 8); 
   amount:number = 50;
   n:number = 0.3;
}
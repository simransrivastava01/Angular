import { Component } from '@angular/core';

@Component ({
   selector: 'app-root',
   template: `
   <ul>
      <li><a [routerLink] = "['/File 1']">Click to get File 1</a></li>
      <li><a [routerLink] = "['/File 2']">Click to get File 2</a></li>
   </ul>
   <router-outlet></router-outlet>` //<router-outlet></router-outlet> is the placeholder to render the component which the user chooses.
})
export class AppComponent  { }
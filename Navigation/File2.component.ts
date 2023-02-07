import { Component } from '@angular/core';
import { Router }  from '@angular/router'; 

@Component({
  selector: 'app-root',
  template: 'File 2 is Fetched <a class = "button" (click) = "onBack()" style="color:blue;">Click to go back to File 1</a>'
})
export class AppFile2 {
  constructor(private _router: Router){} 

   onBack(): void { 
      this._router.navigate(['/File 1']); 
   } 
}

 

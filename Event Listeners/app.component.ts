import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  message = 'Hello World';
  function() {
    alert(this.message);
  }
}

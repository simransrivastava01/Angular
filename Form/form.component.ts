import { Component } from '@angular/core';
import { Properties } from './formProperties';

@Component ({
   selector: 'product-form',
   templateUrl: './form.component.html'
})

export class FormComponent {
   obj = new Properties(1,'ProductA', 987654321);
}
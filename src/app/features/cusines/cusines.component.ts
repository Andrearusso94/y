import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cusines',
  templateUrl: './cusines.component.html',
  styleUrls: ['./cusines.component.scss']
})
export class CusinesComponent {
  //mando in input i dati dell'array delle cucine
@Input() cucine = [];
}

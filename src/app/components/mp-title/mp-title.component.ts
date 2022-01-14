import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mp-title',
  templateUrl: './mp-title.component.html',
  styleUrls: ['./mp-title.component.css']
})
export class MpTitleComponent {
  @Input() color: string;

  constructor() { }

}

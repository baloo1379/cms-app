import { GridModel } from './../../models/grid.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {
  @Input() grid: GridModel[];

  constructor() { }
}

import { Component, Input } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  @Input() appPages: object = {};
  keys = Object.keys;

  constructor(private menu: MenuController) {}

  public openMenu() {
    this.menu.open('main-menu');
  }
}

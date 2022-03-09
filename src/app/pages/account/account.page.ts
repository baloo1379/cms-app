import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuService } from 'src/app/services/ui/menu.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  constructor(
    private menuService: MenuService
  ) {}

  ngOnInit() {
    this.menuService.setPageTitle('Konto');
    this.menuService.setPageBackgroundColor('white');
  }

  login(form) {
    console.log(form);
  }

}

import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/ui/menu.service';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.page.html',
  styleUrls: ['./coupons.page.scss'],
})
export class CouponsPage implements OnInit {
  pageTitle = 'Kupony';

  constructor(private menuService: MenuService) {
    this.menuService.setPageTitle(this.pageTitle);
  }

  ngOnInit() {
  }

}

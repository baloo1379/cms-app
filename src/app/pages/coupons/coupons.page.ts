import { CouponsService } from './../../services/pages/coupons.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from 'src/app/services/app.service';
import { MenuService } from 'src/app/services/ui/menu.service';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.page.html',
  styleUrls: ['./coupons.page.scss'],
})
export class CouponsPage implements OnInit {
  public pageTitle = '';
  public pageBackgroundColor = 'white';
  public postsGrid = [];

  private subscriptions: Array<Subscription> = [];

  constructor(
    private appService: AppService,
    private menuService: MenuService,
    private couponsService: CouponsService
  ) {}

  ngOnInit() {
    this.menuService.setPageBackgroundColor(this.pageBackgroundColor);
    this.subscriptions.push(this.appService.getAppPage().subscribe(appPages => {
      this.pageTitle = appPages?.coupons?.title;
      this.menuService.setPageTitle(this.pageTitle);
    }));
    this.subscriptions.push(this.couponsService.getCouponsPage().subscribe(couponsPage => {
      console.log('couponsPage', couponsPage);
    }));
  }

}

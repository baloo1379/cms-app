import { CouponsService } from './../../services/pages/coupons.service';
import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
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
    this.subscriptions.push(this.appService.appPages$.subscribe(appPages => {
      this.pageTitle = appPages?.coupons?.title;
      this.menuService.setPageTitle(this.pageTitle);
    }));
    this.subscriptions.push(this.couponsService.couponsPageModel$.subscribe(couponsPageModel => {
      this.pageBackgroundColor = couponsPageModel.backgroundColor;
      this.menuService.setPageBackgroundColor(this.pageBackgroundColor);
      this.postsGrid = couponsPageModel.postsGrid;
    }));
  }

}

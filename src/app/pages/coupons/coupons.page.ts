import { CouponTags } from './../../models/coupons/couponTags.model';
import { CouponPreview } from './../../models/coupons/couponPreview.model';
import { GridModel } from './../../models/grid.model';
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
  public postsGrid: GridModel[] = [];
  public coupons: CouponPreview[] = [];
  public tags = [];
  public filteredCoupons = [];

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
      this.coupons = couponsPage.couponsWithTags;
      this.prepareCouponsGrid(this.coupons);
      this.tags = couponsPage.allTags;
      this.filteredCoupons = this.coupons;
    }));
  }

  filterByTag(id) {
    let filtered = false;
    this.tags.map(tag => {
      if (tag.id === id) {
        tag.enabled = !tag?.enabled;
      }
    });
    this.filteredCoupons = this.coupons.filter(coupon => coupon.tags.some(tag => {
      for(const gT of this.tags) {
        if (gT.enabled) {
          if(tag.id === gT.id) { filtered = true; return true; }
        }
      };
    }));
    if (!filtered) {
      this.filteredCoupons = this.coupons;
    }
    this.prepareCouponsGrid(this.filteredCoupons);
  }

  prepareCouponsGrid(coupons: Array<any>) {
    this.postsGrid = coupons.map(coupon => new GridModel({image: coupon.image, link: `/post/${coupon.id}`}));
  }

}

import { CouponService } from 'src/app/services/pages/coupon.service';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuService } from 'src/app/services/ui/menu.service';
import { ModalController } from '@ionic/angular';
import { CouponCodeComponent } from 'src/app/components/coupon-code/coupon-code.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.page.html',
  styleUrls: ['./coupon.page.scss'],
})
export class CouponPage implements OnInit, OnDestroy {
  public content: string;
  public image: string;
  private couponId: number;
  private couponTitle: string;

  private subscriptions: Array<Subscription> = [];

  constructor(
    private menuService: MenuService,
    private route: ActivatedRoute,
    private router: Router,
    private couponService: CouponService,
    public authService: AuthService,
    public modalController: ModalController
  ) { }

  ngOnInit(): void {
    this.couponId = Number(this.route.snapshot.paramMap.get('id'));
    this.subscriptions.push(this.couponService.getCoupon(this.couponId).subscribe(coupon => {
      this.couponTitle = coupon.name;
      this.content = coupon.description;
      this.image = coupon.image;
      this.menuService.setPageTitle(this.couponTitle);
      this.menuService.setPageBackgroundColor('white');
    }));
  }

  presentModal() {
    this.couponService.getCode(this.couponId).subscribe(async code => {
      const modal = await this.modalController.create({
        component: CouponCodeComponent,
        componentProps: {code: `${code.code}`},
        cssClass: 'my-custom-class',
        initialBreakpoint: 0.5,
        breakpoints: [0, 0.5]
      });
      return await modal.present();
    }, () => {
      this.redirectToLogin();
    });
  }

  redirectToLogin() {
    this.router.navigate(['/login']);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }
}

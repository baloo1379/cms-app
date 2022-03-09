import { AuthService } from './../../services/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuService } from 'src/app/services/ui/menu.service';
import { ModalController, PopoverController } from '@ionic/angular';
import { CouponCodeComponent } from 'src/app/components/coupon-code/coupon-code.component';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.page.html',
  styleUrls: ['./coupon.page.scss'],
})
export class CouponPage implements OnInit {
  public isModalOpen = false;

  private couponId: number;
  private couponTitle: string;

  constructor(
    private menuService: MenuService,
    private route: ActivatedRoute,
    private router: Router,
    public authService: AuthService,
    public modalController: ModalController
  ) { }

  ngOnInit(): void {
    this.couponId = Number(this.route.snapshot.paramMap.get('id'));
    this.couponTitle = `Kupon ${this.couponId}`;
    this.menuService.setPageTitle(this.couponTitle);
    this.menuService.setPageBackgroundColor('white');
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: CouponCodeComponent,
      componentProps: {code: `M125987 ${this.couponId}`},
      cssClass: 'my-custom-class',
      initialBreakpoint: 0.5,
      breakpoints: [0, 0.5]
    });

    return await modal.present();
  }

  redirectToLogin() {
    this.router.navigate(['/login']);
  }
}

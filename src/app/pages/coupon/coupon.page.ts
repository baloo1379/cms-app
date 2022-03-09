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
    public popoverController: PopoverController,
    public modalController: ModalController
  ) {}

  ngOnInit(): void {
    this.couponId = Number(this.route.snapshot.paramMap.get('id'));
    this.couponTitle = `Kupon ${this.couponId}`;
    this.menuService.setPageTitle(this.couponTitle);
    this.menuService.setPageBackgroundColor('white');
  }

  async openBottomSheet(ev: any) {
    const popover = await this.popoverController.create({
      component: CouponCodeComponent,
      componentProps: {code: `${this.couponId}`},
      translucent: true,
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: CouponCodeComponent,
      componentProps: {code: `${this.couponId}`},
      cssClass: 'my-custom-class',
      initialBreakpoint: 0.5,
      breakpoints: [0, 0.5]
    });
    // const { role } = await modal.onDidDismiss();
    // console.log('onDidDismiss resolved with role', role);
    return await modal.present();
  }

  async openBottomModal() {
    if (this.isModalOpen) { this.isModalOpen = false; }
    else { this.isModalOpen = true; }
  }
}

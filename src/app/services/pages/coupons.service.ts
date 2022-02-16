import { CouponsPageModel } from './../../models/coupons.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CouponsService {
  public couponsPageModel$: Observable<CouponsPageModel>;
  private couponsPageModelBS = new BehaviorSubject<CouponsPageModel>(new CouponsPageModel({}));

  constructor() {
    const posImg = './assets/tile_placeholder.png';
    const postsGrid = [
      { img: posImg, link: '/coupon/1' },
      { img: posImg, link: '/coupon/2' },
      { img: posImg, link: '/coupon/3' },
      { img: posImg, link: '/coupon/4' },
      { img: posImg, link: '/coupon/5' },
      { img: posImg, link: '/coupon/6' },
      { img: posImg, link: '/coupon/7' },
      { img: posImg, link: '/coupon/8' },
      { img: posImg, link: '/coupon/9' },
      { img: posImg, link: '/coupon/10' },
      { img: posImg, link: '/coupon/11' },
      { img: posImg, link: '/coupon/12' }
    ];

    const couponsPageModel = new CouponsPageModel({ backgroundColor: 'white', postsGrid });

    this.couponsPageModel$ = this.couponsPageModelBS.asObservable();
    setTimeout(() => {
      this.couponsPageModelBS.next(couponsPageModel);
    }, 500);
  }
}

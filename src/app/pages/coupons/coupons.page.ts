import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/ui/menu.service';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.page.html',
  styleUrls: ['./coupons.page.scss'],
})
export class CouponsPage implements OnInit {
  pageTitle = 'Kupony';
  posImg = './assets/grid.jpg';
  grid = [
    {img: this.posImg, link: '/coupon/1'},
    {img: this.posImg, link: '/coupon/2'},
    {img: this.posImg, link: '/coupon/3'},
    {img: this.posImg, link: '/coupon/4'},
    {img: this.posImg, link: '/coupon/5'},
    {img: this.posImg, link: '/coupon/6'},
    {img: this.posImg, link: '/coupon/7'},
    {img: this.posImg, link: '/coupon/8'},
    {img: this.posImg, link: '/coupon/9'},
    {img: this.posImg, link: '/coupon/10'},
    {img: this.posImg, link: '/coupon/11'},
    {img: this.posImg, link: '/coupon/12'}
  ];

  constructor(private menuService: MenuService) {
    this.menuService.setPageTitle(this.pageTitle);
    this.menuService.setPageBackgroundColor('white');
  }

  ngOnInit() {
  }

}

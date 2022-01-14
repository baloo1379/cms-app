import { MenuService } from './../../services/ui/menu.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage {
  pageTitle = 'Strona Główna';
  pageBackgroundColor = '#eee';
  pageBackgroundImg = './assets/main-bg.jpg';
  posImg = './assets/grid.jpg';
  grid = [
    {img: this.posImg, link: '/post/1'},
    {img: this.posImg, link: '/post/2'},
    {img: this.posImg, link: '/post/3'},
    {img: this.posImg, link: '/post/4'},
    {img: this.posImg, link: '/post/5'},
    {img: this.posImg, link: '/post/6'},
    {img: this.posImg, link: '/post/7'},
    {img: this.posImg, link: '/post/8'},
    {img: this.posImg, link: '/post/9'},
    {img: this.posImg, link: '/post/10'},
    {img: this.posImg, link: '/post/11'},
    {img: this.posImg, link: '/post/12'}
  ];

  constructor(private menuService: MenuService) {
    this.menuService.setPageTitle(this.pageTitle);
    this.menuService.setPageBackgroundColor(this.pageBackgroundColor);
  }

  prepareGradient() {
    return `linear-gradient(to bottom, rgba(0,0,0,0), ${this.pageBackgroundColor})`;
  }

}

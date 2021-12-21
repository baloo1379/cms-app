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
    {img: this.posImg, link: '#'},
    {img: this.posImg, link: '#'},
    {img: this.posImg, link: '#'},
    {img: this.posImg, link: '#'},
    {img: this.posImg, link: '#'},
    {img: this.posImg, link: '#'},
    {img: this.posImg, link: '#'},
    {img: this.posImg, link: '#'},
    {img: this.posImg, link: '#'},
    {img: this.posImg, link: '#'},
    {img: this.posImg, link: '#'},
    {img: this.posImg, link: '#'}
  ];

  constructor(private menuService: MenuService) {
    this.menuService.setPageTitle(this.pageTitle);
    this.menuService.setPageBackgroundColor(this.pageBackgroundColor);
  }

  prepareGradient() {
    return `linear-gradient(to bottom, rgba(0,0,0,0), ${this.pageBackgroundColor})`;
  }

}

import { GridModel } from './../../models/grid.model';
import { MainPageService } from 'src/app/services/pages/main.service';
import { MenuService } from 'src/app/services/ui/menu.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnDestroy, OnInit {
  public pageTitle = 'Strona główna';
  public pageBackgroundColor = 'white';
  public pageBackgroundImg = '';
  public postsGrid: GridModel[] = [];
  public contentTitle = '';

  private subscriptions: Array<Subscription> = [];

  constructor(
    private menuService: MenuService,
    private mainPageService: MainPageService
  ) { }

  ngOnInit(): void {
    this.subscriptions.push(this.mainPageService.getMainPage().subscribe(mainPage => {
      this.contentTitle = mainPage.contentTitle;
      this.pageBackgroundImg = mainPage.backgroundImage;
      this.pageBackgroundColor = mainPage.backgroundColor;
      this.postsGrid = mainPage.activePosts.map(post => new GridModel({image: post.image, link: `/post/${post.postID}`}));

      this.menuService.setPageTitle(this.pageTitle);
      this.menuService.setPageBackgroundColor(this.pageBackgroundColor);
    }));
  }

  prepareGradient() {
    return `linear-gradient(to bottom, rgba(0,0,0,0), ${this.pageBackgroundColor})`;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }
}

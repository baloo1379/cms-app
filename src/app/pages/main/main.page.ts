import { MainPageService } from 'src/app/services/pages/main.service';
import { AppService } from 'src/app/services/app.service';
import { MenuService } from 'src/app/services/ui/menu.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnDestroy, OnInit {
  public pageTitle = '';
  public pageBackgroundColor = 'white';
  public pageBackgroundImg = '';
  public postsGrid = [];
  public contentTitle = '';

  private subscriptions: Array<Subscription> = [];

  constructor(
    private appService: AppService,
    private menuService: MenuService,
    private mainPageService: MainPageService
  ) { }

  ngOnInit(): void {
    this.subscriptions.push(this.appService.getAppPage().subscribe(appPages => {
      this.pageTitle = appPages?.main?.title;
      this.menuService.setPageTitle(this.pageTitle);
    }));
    this.subscriptions.push(this.mainPageService.getMainPage().subscribe(mainPage => {
      this.contentTitle = mainPage.contentTitle;
      this.pageBackgroundImg = mainPage.backgroundImage;
      this.pageBackgroundColor = mainPage.backgroundColor;
      this.menuService.setPageBackgroundColor(this.pageBackgroundColor);
      this.postsGrid = mainPage.activePosts;
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

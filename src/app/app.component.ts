import { MenuService } from 'src/app/services/ui/menu.service';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnDestroy {
  public appPages = [
    { title: 'Strona Główna', url: '/home', icon: 'home' },
    { title: 'Kupony', url: '/coupons', icon: 'ticket' },
    { title: 'Post', url: '/post/1', icon: 'archive' }
  ];
  public pageTitle = '';
  public pageBackgroundColor = '';
  private subscriptions: Array<Subscription> = [];

  constructor(private menuService: MenuService) {
    this.subscriptions.push(this.menuService.onPageTitleChange().subscribe(value => this.pageTitle = value));
    this.subscriptions.push(this.menuService.onPageBackgroundColorChange().subscribe(value => this.pageBackgroundColor = value));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }
}

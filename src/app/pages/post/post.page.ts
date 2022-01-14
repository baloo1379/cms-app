import { Component } from '@angular/core';
import { MenuService } from 'src/app/services/ui/menu.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage {
  private postId: number;
  private pageTitle: string;

  constructor(private menuService: MenuService, private route: ActivatedRoute, private router: Router) {
    this.postId = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle = `Post ${this.postId}`;
    this.menuService.setPageTitle(this.pageTitle);
    this.menuService.setPageBackgroundColor('white');
  }
}

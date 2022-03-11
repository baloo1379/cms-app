import { PostService } from 'src/app/services/pages/post.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuService } from 'src/app/services/ui/menu.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit, OnDestroy {
  public title: string;
  public content: string;
  private postId: number;

  private subscriptions: Array<Subscription> = [];

  constructor(
    private menuService: MenuService,
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.postId = Number(this.route.snapshot.paramMap.get('id'));
    this.subscriptions.push(this.postService.getPost(this.postId).subscribe(post => {
      this.title = post.title;
      this.content = post.content;
      this.menuService.setPageTitle(this.title);
      this.menuService.setPageBackgroundColor('white');
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MenuService } from 'src/app/services/ui/menu.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  constructor(
    private router: Router,
    private menuService: MenuService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.menuService.setPageTitle('Konto');
    this.menuService.setPageBackgroundColor('white');
  }

  logoutUser() {
    this.authService.logout().subscribe(
      () => {
        this.router.navigate(['/auth']);
      },
      err => {
        alert('Nie wylogowano');
        console.error(err);
      }
    );
  }

}

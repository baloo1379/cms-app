import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/services/ui/menu.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private menuService: MenuService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.menuService.setPageTitle('Konto');
    this.menuService.setPageBackgroundColor('white');
  }

  login(form) {
    console.log(form);
  }

  redirectToRegister() {
    this.router.navigate(['/register']);
  }

}

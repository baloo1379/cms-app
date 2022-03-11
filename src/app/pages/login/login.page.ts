import { AuthService } from 'src/app/services/auth.service';
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
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.menuService.setPageTitle('Konto');
    this.menuService.setPageBackgroundColor('white');
  }

  login(form) {
    this.authService.login(form.form.value.userName, form.form.value.password).subscribe(result => {
      this.router.navigate(['/account']);
    });
  }

  redirectToRegister() {
    this.router.navigate(['/register']);
  }

}

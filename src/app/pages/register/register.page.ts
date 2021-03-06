import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MenuService } from 'src/app/services/ui/menu.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(
    private menuService: MenuService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.menuService.setPageTitle('Rejestracja');
    this.menuService.setPageBackgroundColor('white');
  }

  register(form) {
    this.authService.register(form.form.value.email, form.form.value.userName, form.form.value.password).subscribe(result => {
      this.router.navigate(['/login']);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/ui/menu.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(
    private menuService: MenuService
  ) { }

  ngOnInit() {
    this.menuService.setPageTitle('Rejestracja');
    this.menuService.setPageBackgroundColor('white');
  }

  register(form) {
    console.log(form);
  }

}

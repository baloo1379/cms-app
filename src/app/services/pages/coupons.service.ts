import { HttpClient } from '@angular/common/http';
import { CouponsPageModel } from '../../models/coupons/coupons.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, AsyncSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CouponsService {
  private couponsPageModelSub = new AsyncSubject<CouponsPageModel>();

  constructor(private http: HttpClient) {
    this.http.get<CouponsPageModel[]>('/coupons').subscribe(result => {
      // const couponsPage = new CouponsPageModel(result);
      console.log('service', result);
    });
  }

  public setCouponsPage(couponsPageModel: CouponsPageModel) {
    this.couponsPageModelSub.next(couponsPageModel);
    this.couponsPageModelSub.complete();
  }

  public getCouponsPage() {
    return this.couponsPageModelSub.asObservable();
  }
}

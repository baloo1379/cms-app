import { CouponDetail } from './../../models/coupons/couponDetail.moddel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { CouponCode } from 'src/app/models/coupons/couponCode.model';

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  constructor(private http: HttpClient) { }

  getCoupon(id: number) {
    return this.http.get<CouponDetail>(`/${id}`).pipe(map(result => {
      result.id = id;
      return result;
    }));
  }

  getCode(id: number) {
    return this.http.get<CouponCode>(`/coupon-code/${id}`).pipe(map(result => {
      result.id = id;
      return result;
    }));
  }
}

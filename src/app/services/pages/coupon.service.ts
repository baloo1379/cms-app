import { Router } from '@angular/router';
import { CouponDetail } from './../../models/coupons/couponDetail.moddel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { CouponCode } from 'src/app/models/coupons/couponCode.model';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  constructor(private http: HttpClient, private router: Router) { }

  getCoupon(id: number) {
    return this.http.get<CouponDetail>(`/api/coupon/${id}`).pipe(map(result => {
      result.id = id;
      return result;
    }), catchError(error => {
      this.router.navigate(['/404']);
      return throwError(error);
    }));
  }

  getCode(id: number) {
    return this.http.get<CouponCode>(`/api/coupon-code/${id}`).pipe(map(result => {
      console.log({result});
      result.id = id;
      return result;
    }), catchError(error => throwError(error)));
  }
}

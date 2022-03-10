import { CouponPreview } from './couponPreview.model';
import { CouponTags } from './couponTags.model';

export class CouponsPageModel {
  couponsWithTags: CouponPreview[];
  allTags: CouponTags[];

  constructor(object: any) {
    this.couponsWithTags = object?.couponsWithTags || [];
    this.allTags = object?.allTags || [];
  }
};

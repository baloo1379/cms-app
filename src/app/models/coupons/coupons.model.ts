import { CouponPreview } from './couponPreview.model';
import { CouponTags } from './couponTags.model';

export class CouponsPageModel {
  coupons: CouponPreview[];
  tags: CouponTags[];

  constructor(object: any) {
    this.coupons = object?.backgroundColor || [];
    this.tags = object?.tags || [];
  }
};

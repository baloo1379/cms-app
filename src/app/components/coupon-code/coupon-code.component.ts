import { Component, ElementRef, Input, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import * as jsBarcode from 'jsbarcode';

@Component({
  selector: 'app-coupon-code',
  templateUrl: './coupon-code.component.html',
  styleUrls: ['./coupon-code.component.scss'],
})
export class CouponCodeComponent implements AfterViewInit {
  @Input() code: string;
  @ViewChild('barcode') barcodeEl: ElementRef<HTMLOrSVGElement>;
  private barcodeOptions = {
    fontSize: 40,
    height: 150,
    width: 2.5
  };

  constructor() { }

  ngAfterViewInit(): void {
    jsBarcode(this.barcodeEl.nativeElement, this.code, this.barcodeOptions);
  }

}

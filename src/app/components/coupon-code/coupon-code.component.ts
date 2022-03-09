import { Component, ElementRef, Input, OnInit, ViewChild, AfterViewInit } from '@angular/core';
const jsBarcode = require('jsbarcode');

@Component({
  selector: 'app-coupon-code',
  templateUrl: './coupon-code.component.html',
  styleUrls: ['./coupon-code.component.scss'],
})
export class CouponCodeComponent implements OnInit, AfterViewInit {
  @Input() code: string;
  @ViewChild('barcode') barcodeEl: ElementRef<HTMLImageElement>;

  constructor() { }
  ngAfterViewInit(): void {
    console.log(this.barcodeEl);
    jsBarcode(this.barcodeEl.nativeElement, 'M957340');
  }

  ngOnInit() {
    // jsBarcode(this.barcodeEl, 'Hi!');
  }

}

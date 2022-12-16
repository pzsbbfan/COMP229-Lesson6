import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/cart.model';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent implements OnInit {

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(public cart:Cart) { }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void {
  }

}

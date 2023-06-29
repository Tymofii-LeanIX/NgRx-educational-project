import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { Book } from 'src/app/shared/book.type';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cart$!: Observable<Book[]>;

  constructor(private cartService: CartService){}

  ngOnInit(): void {
    this.cart$ = this.cartService.cart;
  }

  checkout() {
    console.log("Book bought")
  }
  removeFromCart(book: Book) {
    this.cartService.removeFromCart(book);
  }
}

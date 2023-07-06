import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Book } from 'src/app/shared/book.type';
import { RemoveFromCart } from 'src/app/store/actions/cart.actions';
import { selectAllBooksInCart } from 'src/app/store/reducers/cart.reducer';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart$: Observable<Book[]> = this.store.select(selectAllBooksInCart)

  constructor(private store: Store){}

  checkout() {
    console.log("Book bought")
  }

  removeFromCart(book: Book) {
    this.store.dispatch(new RemoveFromCart(book))
  }
}

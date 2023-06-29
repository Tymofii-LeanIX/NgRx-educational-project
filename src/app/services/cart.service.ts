import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Book } from '../shared/book.type';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _cart = new BehaviorSubject<Book[]>([]);

  get cart(): Observable<Book[]> {
    return this._cart.asObservable();
  }

  addToCart(book: Book): void {
    this._cart.next([...this._cart.value, book]);
  }

  removeFromCart(book: Book): void {
    this._cart.next(this._cart.value.filter(b => b.id !== book.id));
  }
}

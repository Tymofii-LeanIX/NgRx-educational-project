import { Component} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Book } from 'src/app/shared/book.type';
import { DeselectBook } from 'src/app/store/actions/book.actions';
import { AddToCart, NavigateToCart } from 'src/app/store/actions/cart.actions';
import { selectSelectedBook } from 'src/app/store/reducers/books.reducer';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent{
  selectedBook$: Observable<Book | null> = this.store.select(selectSelectedBook)
  bookId!: number;

  constructor(
    private store: Store
  ){}

  deselectBook(){
    this.store.dispatch(new DeselectBook)
  }

  addToCart(book: Book){
    this.store.dispatch(new AddToCart(book));
    this.store.dispatch(new NavigateToCart);
  }
}

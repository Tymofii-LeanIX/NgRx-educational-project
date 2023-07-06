import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/shared/book.type';
import { BooksState } from 'src/app/shared/union-state.interface';
import { Store } from '@ngrx/store';
import { LoadBooks, NavigateToSelectedBook, SelectBook } from 'src/app/store/actions/book.actions';
import { selectAllBooks } from 'src/app/store/reducers/books.reducer';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit{
  books$: Observable<Book[]> = this.store.select(selectAllBooks)
  constructor(private store: Store<BooksState>) {}
  
  ngOnInit(): void {
    this.store.dispatch(new LoadBooks)
  }

  selectBook(book: Book): void{
    this.store.dispatch(new SelectBook(book));
    this.store.dispatch(new NavigateToSelectedBook(book))
  }
}

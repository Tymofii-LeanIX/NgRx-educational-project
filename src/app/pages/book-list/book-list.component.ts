import { Router } from '@angular/router';

import { BookService } from './../../services/book.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/shared/book.type';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit{
  books$!: Observable<Book[]>

  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit(): void {
    this.books$ = this.bookService.getBooks();
  }

  selectBook(id: number): void{
    this.router.navigate(['/books/', id])
  }
}

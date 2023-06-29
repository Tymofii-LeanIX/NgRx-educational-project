import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { BookService } from 'src/app/services/book.service';
import { CartService } from 'src/app/services/cart.service';
import { Book } from 'src/app/shared/book.type';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book$!: Observable<Book | null>;
  bookId!: number;

  constructor(
    private cartService: CartService, 
    private router: Router,
    private route: ActivatedRoute,
    private bookService: BookService,
  ){}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.bookId = +params['id'];
      this.book$ = this.bookService.getBook(this.bookId)
    }
  )}

  deselectBook(){
    this.router.navigate(['..'])
  }

  addToCart(book: Book){
    this.cartService.addToCart(book);
    this.router.navigate(['/cart'])
  }
}

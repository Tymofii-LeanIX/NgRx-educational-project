import { Injectable } from '@angular/core';
import { Book } from '../shared/book.type';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books: Book[] = [
    {
      id: 1,
      title: 'Harry Spotter',
      author: 'John',
      description: 'Book about powerlifting',
      coverImage: '/assets/images/harry-spotter.png'
    },
    {
      id: 2,
      title: 'Lord of Donuts',
      author: 'Peter',
      description: 'Book about donuts',
      coverImage: '/assets/images/lord-of-donuts.png'
    },
    {
      id: 3,
      title: 'Tom and Perry',
      author: 'Karl',
      description: 'Book about animals',
      coverImage: 'assets/images/tom-n-perry.png'
    },
  ]

  getBooks(): Observable<Book[]> {
    return of(this.books)
  }
}

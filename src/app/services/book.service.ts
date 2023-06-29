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
      coverImage: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg/220px-Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg'
    },
    {
      id: 2,
      title: 'Lord of Donuts',
      author: 'Peter',
      description: 'Book about donuts',
      coverImage: 'https://m.media-amazon.com/images/I/71jLBXtWJWL._AC_UF894,1000_QL80_.jpg'
    },
    {
      id: 3,
      title: 'Tom and Perry',
      author: 'Karl',
      description: 'Book about animals',
      coverImage: 'https://m.media-amazon.com/images/I/511BRDQCOvL._AC_UF1000,1000_QL80_.jpg'
    },
  ]

  getBooks(): Observable<Book[]> {
    return of(this.books)
  }

  getBook(id: number): Observable<Book | null> {
    const foundBook = this.books.find(book => book.id === id);
    
    if (!foundBook) {
      console.log("There is no such book");
      return of(null); 
    } else {
      return of(foundBook);
    }
  }
}

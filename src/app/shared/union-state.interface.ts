import { Book } from "./book.type";

export interface AppState {
    book: BooksState,
    cart: CartState
}

export interface CartState {
    books: Book[]
}

export interface BooksState {
    books: Book[],
    selectedBook: Book | null,
}
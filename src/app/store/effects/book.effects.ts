import { BooksSuccessfullyLoaded, SelectBook } from './../actions/book.actions';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { BookService } from "src/app/services/book.service";
import { BookActionTypes } from "../actions/book.actions";
import { EMPTY, catchError, exhaustMap, map, tap } from "rxjs";
import { Router } from '@angular/router';

@Injectable()
export class BookEffects {
    constructor(private actions$: Actions, private bookService: BookService, private router: Router) {}

    loadBooks$ = createEffect(() => this.actions$.pipe(
        ofType(BookActionTypes.LoadBooks),
        exhaustMap(() => this.bookService.getBooks()
        .pipe(
            map(books => new BooksSuccessfullyLoaded(books)),
            catchError(() => EMPTY),
        )
        )))

    navigateToSelectedBook$ = createEffect(() => this.actions$.pipe(
        ofType(BookActionTypes.NavigateToSelectedBook),
        tap((action: SelectBook) => this.router.navigate(['/books', action.payload.id]))
    ), { dispatch: false })

    deselectBook$ = createEffect(() => this.actions$.pipe(
        ofType(BookActionTypes.DeselectBook),
        tap((action: SelectBook) => this.router.navigate(['..']))
    ), { dispatch: false })
}
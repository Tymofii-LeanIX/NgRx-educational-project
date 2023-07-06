import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BookActionTypes, BookActionsUnionType } from "../actions/book.actions";
import { BooksState } from "src/app/shared/union-state.interface";

export const initialBookState: BooksState = {
    books: [],
    selectedBook: null,
};

// very strange behaviour: seems like `<ActionReducer>` in line below is not neccesary, but if I remove it, then the app.module is yelling, that the `bookReducer` has a wrong type
export function bookReducer<ActionReducer>(state: BooksState = initialBookState, action: BookActionsUnionType) { 
    switch (action.type) {
        case BookActionTypes.BooksSuccessfullyLoaded: {
            return {
                ...state,
                books: action.payload,
            };
        }

        case BookActionTypes.SelectBook: {
            return {
                ...state,
                selectedBook: action.payload,
            }
        }

        default: {
            return state;
        }
    }
}

// Selectors
export const selectBooksFeature = createFeatureSelector<BooksState>('books');

export const selectAllBooks = createSelector(
    selectBooksFeature,
    (state: BooksState) => state.books
)

export const selectSelectedBook = createSelector(
    selectBooksFeature,
    (state: BooksState) => state.selectedBook
)
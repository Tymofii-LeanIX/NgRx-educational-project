import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartActionTypes, CartActionsUnionType } from '../actions/cart.actions';
import { CartState } from 'src/app/shared/union-state.interface';

export const initialCartState: CartState = { books: [] };

export function cartReducer<ActionReducer>(state = initialCartState, action: CartActionsUnionType){
    switch (action.type) {
        case CartActionTypes.AddToCart: {
            return {
                ...state,
                books: [...state.books, action.payload],
            }
        }

        case CartActionTypes.RemoveFromCart: {
            return { 
                ...state,
                books: [...state.books.filter(book => book.id != action.payload.id)]
            } 
        };

        default: {
            return state;
        }
    }
}

// Selectors
export const selectCartFeature = createFeatureSelector<CartState>('cart');

export const selectAllBooksInCart = createSelector(
    selectCartFeature,
    (state: CartState) => state.books
)
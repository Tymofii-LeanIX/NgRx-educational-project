import { Action } from "@ngrx/store";
import { Book } from "src/app/shared/book.type";

// The `enum` is used to easily define the named constants, provide compile-time checks for errors (e.g. checking the typo like LoadBooooks while writing code), and provide single-truth source for that types for actions
// Also, the AddToCart is used in BookDetailComponent, but we still define it here, in CartActions. This is a common scenario where an action might logically belong to one domain (cart), but is triggered by another (book detail). In such cases, you could still define AddToCart within cart.actions.ts, even if it's dispatched from the BookDetailComponent. This way, all cart-related actions are kept in one place, which makes sense logically and aids maintainability.
// And, of course, for smaller projects, you can use one ActionTypes file, but I've used two separate ActionTypes files just to practice, if I have a big project where I want to differentiate the actions by feature area
export enum CartActionTypes {
    AddToCart = '[Cart] Add To Cart',
    RemoveFromCart = '[Cart] Remove From Cart',
    NavigateToCart = '[Cart] Navigate To Cart',
}

export type CartActionsUnionType = AddToCart | RemoveFromCart;

export class AddToCart implements Action {
    readonly type = CartActionTypes.AddToCart; 
    constructor(public payload: Book) {} 
}

export class NavigateToCart implements Action {
    readonly type = CartActionTypes.NavigateToCart;
}

export class RemoveFromCart implements Action {
    readonly type = CartActionTypes.RemoveFromCart; 
    constructor(public payload: Book ) {} 
}
import { Book } from './../../shared/book.type';
import { Action } from "@ngrx/store";

// The `enum` is used to easily define the named constants, provide compile-time checks for errors (e.g. checking the typo like LoadBooooks while writing code), and provide single-truth source for that types for actions
// Also, the AddToCart is used in BookDetailComponent, but we still define it here, in CartActions. This is a common scenario where an action might logically belong to one domain (cart), but is triggered by another (book detail). In such cases, you could still define AddToCart within cart.actions.ts, even if it's dispatched from the BookDetailComponent. This way, all cart-related actions are kept in one place, which makes sense logically and aids maintainability.
// And, of course, for smaller projects, you can use one ActionTypes file, but I've used two separate ActionTypes files just to practice, if I have a big project where I want to differentiate the actions by feature area
export enum BookActionTypes {  
    LoadBooks = '[Books] Load Books',
    BooksSuccessfullyLoaded = '[Books] The Books Have Been Successfully Loaded',
    SelectBook = '[Books] Select Book',
    BookHasBeenSelected = '[Books] Book Has Been Selected',
    DeselectBook = '[Books] Book Has Been Deselected',
    NavigateToSelectedBook = '[Books] Navigate To Selected Book',
}

// Why I created this union type? Because in newer versions of NgRx they removed 'payload' as possible attribute of Action. I was looking for solution, and seems like the best one is to create a Union type and assign this type to Reducer as a type for parameter `action`. But, for me, that's not perfectly clear solution
export type BookActionsUnionType = LoadBooks | SelectBook | BooksSuccessfullyLoaded; 

export class LoadBooks implements Action {
    readonly type = BookActionTypes.LoadBooks; 
}

export class BooksSuccessfullyLoaded implements Action {
    readonly type = BookActionTypes.BooksSuccessfullyLoaded;
    constructor(public payload: Book[]) {}
}

export class SelectBook implements Action {
    readonly type = BookActionTypes.SelectBook;
    constructor(public payload: Book) {} 
}

export class NavigateToSelectedBook implements Action {
    readonly type = BookActionTypes.NavigateToSelectedBook;
    constructor(public payload: Book) {} 
}

export class DeselectBook implements Action {
    readonly type = BookActionTypes.DeselectBook;
}

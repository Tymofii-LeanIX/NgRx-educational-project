import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CartActionTypes } from "../actions/cart.actions";
import { SelectBook } from "../actions/book.actions";
import { Router } from "@angular/router";
import { tap } from "rxjs";

@Injectable()
export class CartEffects {
    constructor(private actions$: Actions, private router: Router) {}

    navigateToCart$ = createEffect(() => this.actions$.pipe(
        ofType(CartActionTypes.NavigateToCart),
        tap((action: SelectBook) => this.router.navigate(['/cart']))
    ), { dispatch: false })
}
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BookDetailComponent } from './pages/book-detail/book-detail.component';
import { CartComponent } from './pages/cart/cart.component';
import { StoreModule } from '@ngrx/store';
import { bookReducer } from './store/reducers/books.reducer';
import { cartReducer } from './store/reducers/cart.reducer';
import { BookEffects } from './store/effects/book.effects';
import { CartEffects } from './store/effects/cart.effects';
import { EffectsModule } from '@ngrx/effects';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookDetailComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ books: bookReducer, cart: cartReducer }),
    EffectsModule.forRoot(BookEffects, CartEffects),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {BookStoreModule} from './book-store/book-store.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { PartialsModule } from './partials/partials.module';
import {JwtModule, JwtHelperService, JwtInterceptor} from '@auth0/angular-jwt';
import { AdminModule } from './admin/admin.module';
import { StoreFirstGuard } from './guards/storeFirst.guard';


export function jwtTokenGetter():string
{
  return localStorage.getItem('id_token');
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BookStoreModule,
    PagesModule,
    PartialsModule,
    AdminModule,
    JwtModule.forRoot({
      config:{
        tokenGetter:jwtTokenGetter
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { HttpClientModule } from '@angular/common/http';
import {NgModule} from '@angular/core';
import { RestDataSource } from '../book-store/cart-summary/rest.datasource';
import { BookRepository } from './book.repository';
import { Cart } from './cart.model';
import { StaticDataSource } from './static.datasource';

@NgModule({
    imports: [HttpClientModule],
    providers:[BookRepository,StaticDataSource,Cart,
    {provide: StaticDataSource, useClass: RestDataSource}]
})
export class ModelModule{}
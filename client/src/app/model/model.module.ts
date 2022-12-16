import { HttpClientModule } from '@angular/common/http';
import {NgModule} from '@angular/core';
import { BookRepository } from './book.repository';
import { StaticDataSource } from './static.datasource';
import { Cart } from './cart.model';
import { OrderRepository } from './order.repository';
import { RestDataSource } from './rest.datasource';
import { Order } from './order.model';
import { AuthService } from './auth.service';

@NgModule({
    imports: [HttpClientModule],
    providers:[BookRepository,StaticDataSource,Cart, OrderRepository, Order,
    {provide: StaticDataSource, useClass: RestDataSource},RestDataSource,AuthService]
})
export class ModelModule{}
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AboutComponent } from "../pages/about/about.component";
import { ContactComponent } from "../pages/contact/contact.component";
import { HomeComponent } from "../pages/home/home.component";
import { ProductsComponent } from "../pages/products/products.component";
import { ServicesComponent } from "../pages/services/services.component";
import { PartialsModule } from "../partials/partials.module";

@NgModule({
    imports:[BrowserModule,FormsModule,PartialsModule],
    declarations :[
        AboutComponent,
        ContactComponent,
        HomeComponent,
        ProductsComponent,
        ServicesComponent
],
    exports:[
        AboutComponent,
        ContactComponent,
        HomeComponent,
        ProductsComponent,
        ServicesComponent
        ]
})
export class PagesModule {}
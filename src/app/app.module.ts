import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FiltersComponent } from './filters/filters.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from './app.service';
import { AppResolver } from './app.resolve';

@NgModule({
  declarations: [
    AppComponent,
    FiltersComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AppService, AppResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { GioithieuComponent } from './gioithieu/gioithieu.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { CocautochucComponent } from './cocautochuc/cocautochuc.component';
import { TintucComponent } from './tintuc/tintuc.component';
import { CongvanComponent } from './congvan/congvan.component';
import { ThucdonComponent } from './thucdon/thucdon.component';
import { QuanlyComponent } from './quanly/quanly.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    MainComponent,
    GioithieuComponent,
    LienheComponent,
    CocautochucComponent,
    TintucComponent,
    CongvanComponent,
    ThucdonComponent,
    QuanlyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

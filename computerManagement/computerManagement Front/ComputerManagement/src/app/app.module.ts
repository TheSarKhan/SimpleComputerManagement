import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComputerComponent } from './computer/computer.component';
import { HomeComponent } from './home/home.component';
 
import { MenuComponent } from './menu/menu.component';
import { ShoppingComponent } from './shopping/shopping.component';
 
import {HttpClientModule} from '@angular/common/http';
import { ComputersComponent } from './computers/computers.component'

@NgModule({
  declarations: [
    AppComponent,
    ShoppingComponent,
    HomeComponent,
    MenuComponent,
    ComputerComponent, 
    ComputersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

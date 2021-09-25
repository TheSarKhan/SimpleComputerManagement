import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComputerComponent } from './computer/computer.component';
import { ComputersComponent } from './computers/computers.component';
import { HomeComponent } from './home/home.component';
 
import { MenuComponent } from './menu/menu.component';
import { ShoppingComponent } from './shopping/shopping.component'; 
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'computer', component: ComputerComponent },
  { path: 'computers', component: ComputersComponent }, 
  { path: 'shopping', component: ShoppingComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

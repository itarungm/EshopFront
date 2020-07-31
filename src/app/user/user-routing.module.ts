import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { InventoryComponent } from './inventory/inventory.component';


const routes: Routes = [
  {
    path:"",
    component:ProductComponent
  },
  {
    path:"inventory/:pPname/:pPrice",component:InventoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

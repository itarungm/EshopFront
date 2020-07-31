import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ProductComponent } from './product/product.component';
import { InventoryComponent } from './inventory/inventory.component';


@NgModule({
  declarations: [ProductComponent, InventoryComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserModule } from './user/user.module';


const routes: Routes = [
  {
    path:"",
    loadChildren: () => import('./admin/admin.module').then(module=>module.AdminModule)
  },
  {
    path:"user",
    loadChildren: () => import('./user/user.module').then(module=>module.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

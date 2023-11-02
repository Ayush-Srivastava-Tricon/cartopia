import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'admin',
    loadChildren:()=> import("./admin/admin.module").then(m=>m.AdminModule)
  },
  {
    path:'',
    loadChildren:()=>import("./product/product.module").then(m=>m.ProductModule),
  },
  {
    path:'single-products/:id',
    loadChildren:()=>import("./single-product/single-product.module").then(m=>m.SingleProductModule)
  },
  {
    path:'single-category/:name',
    loadChildren:()=>import("./single-category/single-category.module").then(m=>m.SingleCategoryModule)
  },
  {
    path:'cart',
    loadChildren:()=>import("./component/cart/cart.module").then(m=>m.CartModule)
  },
  {
    path:'wishlist',
    loadChildren:()=>import("./component/wishlist/wishlist.module").then(m=>m.WishlistModule)
  },
  {
    path:'profile',
    loadChildren:()=>import("./component/profile/profile.module").then(m=>m.ProfileModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

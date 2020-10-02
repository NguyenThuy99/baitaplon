import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CocautochucComponent } from './cocautochuc/cocautochuc.component';
import { CongvanComponent } from './congvan/congvan.component';
import { GioithieuComponent } from './gioithieu/gioithieu.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { MainComponent } from './main/main.component';
import { QuanlyComponent } from './quanly/quanly.component';
import { ThucdonComponent } from './thucdon/thucdon.component';
import { TintucComponent } from './tintuc/tintuc.component';

const routes: Routes = [
  {path:"",component:MainComponent},
   {path:"gioithieu",component:GioithieuComponent},
   {path:"cocautochuc",component:CocautochucComponent},
   {path:"tintuc",component:TintucComponent},
   {path:"congvan",component:CongvanComponent},
   {path:"thucdon",component:ThucdonComponent},
   {path:"lienhe",component:LienheComponent},
   {path:"quanly",component:QuanlyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

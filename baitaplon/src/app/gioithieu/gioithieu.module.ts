import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GioithieuComponent } from './gioithieu.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:"",component:GioithieuComponent}
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([])
  ]
})
export class GioithieuModule { }

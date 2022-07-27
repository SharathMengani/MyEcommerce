import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { MainpageComponent } from './mainpage/mainpage.component';

const routes: Routes = [

 
  {path:"home",component:HomeComponent,children:[
     {path:"register",component:RegisterComponent},
     {path:"details",component:DetailsComponent},
     {path:"mainpage",component:MainpageComponent},
     {path:"",redirectTo:"mainpage",pathMatch:"full"}
  ]},
  {path:"",redirectTo:"home",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

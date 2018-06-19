import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BodyComponent} from './components/body/body.component';
import {NewComponent} from './components/new/new.component';
import {DisplayComponent} from './components/display/display.component';
import {EditComponent} from './components/edit/edit.component';
const routes: Routes = [
	{path:'',component:BodyComponent},
	{path:"show/:id",component:DisplayComponent},
	{path:"edit/:id",component:EditComponent},
	{path:"new",component:NewComponent},
	{path:"**",redirectTo:''},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

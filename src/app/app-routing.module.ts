import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './tabs/about-page/about-page.component';
import { HomePageComponent } from './tabs/home-page/home-page.component';

const routes : Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'about', component: AboutPageComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

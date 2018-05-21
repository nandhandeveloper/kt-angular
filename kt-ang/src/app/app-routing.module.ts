import { CuisineMenuComponent } from './cuisine-menu/cuisine-menu.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CuisinesComponent } from './cuisines/cuisines.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'cuisines', component: CuisinesComponent},
  { path: 'cuisines/:cuisinename', component: CuisineMenuComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home'}
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

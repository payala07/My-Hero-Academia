import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesDetailsComponent } from './heroes/heroes-details/heroes-details.component';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  { path:'heroes', component:HeroesComponent, children: [
    { path: 'heroes-details', component: HeroesDetailsComponent },
  ]
 },
  //{ path:'page-not-found', component:PageNotFoundComponent },
  //{ path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

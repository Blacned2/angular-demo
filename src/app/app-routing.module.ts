import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardSelectedComponent } from './card-selected/card-selected.component';
import { CategoryComponent } from './category/category.component';
import { MoviesComponent } from './movies/movies.component';

const routes : Routes = [
  
  {path:"movies-list",component:MoviesComponent},
  {path:"category-list",component:CategoryComponent},
  {path:"card-selected/:id",component:CardSelectedComponent},

  {path:"**",component:MoviesComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

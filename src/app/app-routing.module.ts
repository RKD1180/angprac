import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./authors/authors.module').then(m => m.AuthorsModule) }, 
  { path: 'authors', loadChildren: () => import('./authors/authors.module').then(m => m.AuthorsModule) }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

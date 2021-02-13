import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoterieComponent } from './coterie/coterie.component';


const routes: Routes = [
    {  path: '', component: CoterieComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

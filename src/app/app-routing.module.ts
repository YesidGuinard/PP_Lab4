import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PrincipalComponent} from './components/principal/principal.component';
import {AltaActorComponent} from './components/alta-actor/alta-actor.component';

const routes: Routes = [

  { path: '', component: AltaActorComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

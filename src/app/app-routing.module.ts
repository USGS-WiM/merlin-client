import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [{ path: '', redirectTo: 'merlin', pathMatch: 'full' },
{ path: 'merlin', component: SidebarComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

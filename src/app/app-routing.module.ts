import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProfessionistCrudComponent } from './professionist/professionist-crud/professionist-crud.component';


const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent},
  { path: 'professionist', component: ProfessionistCrudComponent},
  { path: '', redirectTo: 'welcome', pathMatch: 'full'},
  { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

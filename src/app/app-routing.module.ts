import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardFormComponent } from './card-form/card-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'card', pathMatch: 'full' },
  { path: 'card', component: CardFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

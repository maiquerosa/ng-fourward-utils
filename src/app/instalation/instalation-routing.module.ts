import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstalationComponent } from './instalation.component';

const routes: Routes = [
  {
    path: '',
    component: InstalationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstalationRoutingModule {}

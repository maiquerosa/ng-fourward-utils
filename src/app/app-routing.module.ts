import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroductionComponent } from './introduction/introduction.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'introduction',
    pathMatch: 'full'
  },
  {
    path: 'introduction',
    component: IntroductionComponent
  },
  {
    path: 'instalation',
    loadChildren: () => import('./instalation/instalation.module').then(m => m.InstalationModule)
  },
  {
    path: 'documentation',
    loadChildren: () => import('./documentation/documentation.module').then(m => m.DocumentationModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}

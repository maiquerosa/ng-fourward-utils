import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NfuFormDocComponent } from './nfu-form-doc/nfu-form-doc.component';
import { DocumentationComponent } from './documentation.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'nfu-form',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DocumentationComponent,
    children: [
      {
        path: 'nfu-form',
        component: NfuFormDocComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentationRoutingModule {}

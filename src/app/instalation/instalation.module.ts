import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstalationRoutingModule } from './instalation-routing.module';
import { InstalationComponent } from './instalation.component';
import { ReuseComponentModule } from '../reuse-component/reuse-component.module';

@NgModule({
  declarations: [InstalationComponent],
  imports: [CommonModule, InstalationRoutingModule, ReuseComponentModule]
})
export class InstalationModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentationRoutingModule } from './documentation-routing.module';
import { NfuFormDocComponent } from './nfu-form-doc/nfu-form-doc.component';
import { DocumentationComponent } from './documentation.component';
import { FourwardFormModule } from 'projects/fourward-utils/src/public-api';

@NgModule({
  declarations: [NfuFormDocComponent, DocumentationComponent],
  imports: [
    CommonModule,
    DocumentationRoutingModule,
    FourwardFormModule
  ]
})
export class DocumentationModule { }

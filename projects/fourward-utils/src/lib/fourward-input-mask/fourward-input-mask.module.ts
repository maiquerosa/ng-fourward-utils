import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { FourwardInputMaskComponent } from './fourward-input-mask.component';
@NgModule({
  declarations: [FourwardInputMaskComponent],
  exports: [FourwardInputMaskComponent],
  imports: [CommonModule, FormsModule]
})
export class FourwardInputMaskModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClipboardInputComponent } from './clipboard-input/clipboard-input.component';
import { InnerCodeComponent } from './inner-code/inner-code.component';

@NgModule({
  declarations: [ClipboardInputComponent, InnerCodeComponent],
  imports: [CommonModule],
  exports: [ClipboardInputComponent, InnerCodeComponent]
})
export class ReuseComponentModule {}

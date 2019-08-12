import { NgModule } from '@angular/core';
import { FourwardFormComponent } from './fourward-form.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FourwardInputMaskModule } from '../fourward-input-mask/fourward-input-mask.module';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FourwardInputMaskModule,
    AutoCompleteModule,
    CalendarModule
  ],
  exports: [FourwardFormComponent],
  declarations: [FourwardFormComponent],
  providers: []
})
export class FourwardFormModule {}

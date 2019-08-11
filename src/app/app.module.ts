import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FourwardInputMaskModule, FourwardFormModule } from 'projects/fourward-utils/src/public-api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FourwardInputMaskModule,FourwardFormModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

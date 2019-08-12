import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FourwardInputMaskModule, FourwardFormModule } from 'projects/fourward-utils/src/public-api';
import { AppRoutingModule } from './app-routing.module';
import { IntroductionComponent } from './introduction/introduction.component';

import { PanelMenuModule } from 'primeng/panelmenu';
import { ReuseComponentModule } from './reuse-component/reuse-component.module';

@NgModule({
  declarations: [AppComponent, IntroductionComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FourwardInputMaskModule,
    FourwardFormModule,
    AppRoutingModule,
    PanelMenuModule,
    ReuseComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

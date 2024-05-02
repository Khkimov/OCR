import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './pages/first-page/first-page.component';
import { SecondPageComponent } from './pages/second-page/second-page.component';
import { ModalComponent } from './modal/modal.component';
import { ImageComponent } from './components/image/image.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    SecondPageComponent,
    ModalComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { CardComponent } from './core/components/card/card.component';
import { ScreenComponent } from './core/components/screen/screen.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SearchbarComponent } from './shared/components/searchbar/searchbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ScreenComponent,
    SearchbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }

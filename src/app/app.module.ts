import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAU0L7yJfoe8ix7LCm9Q-9UAfbPSUKodLM'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app/app.component';
import {SubstituteService} from "./Services/substitute/substitute.service";
import {HttpClientModule} from "@angular/common/http";
import { RollTextService } from './Services/roll-text/roll-text.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [SubstituteService,RollTextService],
  bootstrap: [AppComponent]
})
export class AppModule { }

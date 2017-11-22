import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { PeroComponent } from './pero/pero.component';
import { CustomFilter } from './cfilter.pipe';
import { TitleCase } from './titleCase.pipe';
import { PanelComponentComponent } from './panel-component/panel-component.component';
import { LikesComponent } from './likes/likes.component';
import { TrackComponent } from './track/track.component';


@NgModule({
  declarations: [
    AppComponent,
    PeroComponent,
    CustomFilter,
    TitleCase,
    PanelComponentComponent,
    LikesComponent,
    TrackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

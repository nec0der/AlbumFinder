import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AlbumsComponent } from './albums.component';
import {ITunesService} from './services/itunes.service';
import {HttpModule} from '@angular/http';


@NgModule({
  declarations: [
    AlbumsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ITunesService],
  bootstrap: [AlbumsComponent]
})
export class AlbumsModule { }

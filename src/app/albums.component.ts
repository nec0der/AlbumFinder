import { Component } from '@angular/core';
import {ITunesService} from './services/itunes.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent {
  public albums: any;
  public isClicked: boolean;
  constructor(private iTunesService: ITunesService) {}

  get(name) {
    this.albums = this.iTunesService.getData(name);
  }
}

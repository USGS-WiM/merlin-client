import { Injectable, EventEmitter } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

@Injectable()
export class SidebarService {
  public sidenav: MatSidenav;

  public setsidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }

  public open() {
      return this.sidenav.open();
  }


  public close() {
      return this.sidenav.close();
  }

  public toggle(): void {
  this.sidenav.toggle();
  }
  constructor() { }
}

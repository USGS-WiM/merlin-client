import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { MatDialog, MatDialogRef } from '@angular/material';

import { AboutComponent } from './about/about.component';

import { AuthenticationComponent } from './authentication/authentication.component';

import { CurrentUserService } from './services/current-user.service';

import { APPSETTINGS } from './app.settings';
import { AuthenticationService } from './services/authentication.service';
import { SidebarService } from './services/sidebar.service';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'merlin-client';

  constructor(
  public sidenav: SidebarService
  ) {
  }
  toggleActive: boolean;
  OnInit() {

  }
  toggleSidebar() {
    this.toggleActive = !this.toggleActive;
    this.sidenav.toggle();
  }
}

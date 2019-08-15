import { Component, OnInit , ViewChild} from '@angular/core';
import { SidebarService } from '../services/sidebar.service';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  events: string[] = [];
  opened: boolean;

  constructor(
    public sidenav: SidebarService
  ) { }

  ngOnInit() {
    this.opened = true;
  }
  toggleSidebar() {
    this.sidenav.toggle();
  }
}

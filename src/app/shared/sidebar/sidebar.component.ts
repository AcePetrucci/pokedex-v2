import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.styl']
})
export class SidebarComponent {

  @HostBinding('class.-closed') private isSidebarClosed = false;

  constructor() { }

  toggleSidebar() {
    this.isSidebarClosed = !this.isSidebarClosed;
  }

}

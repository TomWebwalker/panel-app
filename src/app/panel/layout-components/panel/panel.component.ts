import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class PanelComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;

  onSidebarToggle(): void {
    this.sidenav.toggle();
  }
}

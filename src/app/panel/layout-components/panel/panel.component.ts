import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { LayoutService } from '../../services/layout.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class PanelComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;
  title$: Observable<string>;

  constructor(layoutService: LayoutService) {
    this.title$ = layoutService.title$;
  }

  onSidebarToggle(): void {
    this.sidenav.toggle();
  }
}

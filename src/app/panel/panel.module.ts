import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent, TopBarComponent } from './layout-components';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material.module';

const routes: Routes = [
  {
    path: '',
    component: PanelComponent,
    children: [
      {
        path: 'settings',
        loadChildren: () =>
          import('./settings/settings.module').then((m) => m.SettingsModule),
      },
    ],
  },
];

@NgModule({
  declarations: [TopBarComponent, PanelComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MaterialModule],
})
export class PanelModule {}

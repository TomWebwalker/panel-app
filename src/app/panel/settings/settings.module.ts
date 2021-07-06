import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../../material.module';
import { ProfileComponent } from './profile/profile.component';
import { ProfileViewComponent } from './profile/profile-view/profile-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordComponent } from './password/password.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
    children: [
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'password',
        component: PasswordComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    SettingsComponent,
    ProfileComponent,
    ProfileViewComponent,
    PasswordComponent,
  ],
  imports: [
    MaterialModule,
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class SettingsModule {}

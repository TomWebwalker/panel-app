import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../services/layout.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  readonly links: { label: string; link: string; icon: string }[] = [
    {
      label: 'Profile',
      link: 'profile',
      icon: 'account_circle',
    },
    {
      label: 'Password',
      link: 'password',
      icon: 'lock',
    },
  ];

  constructor(layoutService: LayoutService) {
    layoutService.setTitle('Settings');
  }

  ngOnInit(): void {}
}

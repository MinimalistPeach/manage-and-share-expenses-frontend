import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { MenuItem } from '../../models/menu-item';

@Component({
  selector: 'app-app-base',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterOutlet, MatMenuModule, RouterLinkWithHref],
  templateUrl: './app-base.html',
  styleUrl: './app-base.scss',
})
export class AppBase {

  private readonly _menuItems: MenuItem[] = [
    {
      label: 'Home',
      icon: 'home',
      route: '/home'
    },
    {
      label: 'Settings',
      icon: 'settings',
      route: '/settings'
    }
  ];
  public get menuItems(): MenuItem[] {
    return this._menuItems;
  }

}

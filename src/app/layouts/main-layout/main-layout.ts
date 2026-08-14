import { Component } from '@angular/core';
import { MainHeader } from './main-header/main-header';
import { MainBody } from './main-body/main-body';
import { MainFooter } from './main-footer/main-footer';

@Component({
  selector: 'app-main-layout',
  imports: [MainHeader, MainBody, MainFooter],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {}

import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-main-footer',
  imports: [],
  templateUrl: './main-footer.html',
  styleUrl: './main-footer.css',
})
export class MainFooter {

  currentYear = signal(new Date().getFullYear())
}

import { Component, signal } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatIconModule,MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title =  signal('Editing Suite');
  logo_path = 'assets/favicon.ico'
}

import { Component } from '@angular/core';
import { ParticlesComponent } from "../components/particles/particles.component";

@Component({
  selector: 'app-home',
  imports: [ParticlesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

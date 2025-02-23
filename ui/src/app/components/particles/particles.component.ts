import { Component, OnInit, AfterViewInit} from '@angular/core';
declare var particlesJS: any;
@Component({
  selector: 'app-particles',
  imports: [],
  templateUrl: './particles.component.html',
  styleUrl: './particles.component.css'
})
export class ParticlesComponent implements OnInit, AfterViewInit {
  ngOnInit(): void {
      
  }
  ngAfterViewInit(): void {
    particlesJS.load('particles-js', 'particles-config.json', function() {
      console.log('callback - particles.js config loaded');
    });
  }
}

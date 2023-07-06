import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ngrx-educational-project';
  isMusicPlaying = false;
  navCollapsed = true;

  @ViewChild('bgMusic') bgMusic!: ElementRef;
  
  ngOnInit() {
    if (!localStorage.getItem('visitedBefore')) {
      alert('You can control the music using buttons in NavBar');
      localStorage.setItem('visitedBefore', 'true')
    }
  }

  playMusic() {
    this.bgMusic.nativeElement.play();
    this.isMusicPlaying = true;
  }
  
  pauseMusic() {
    this.bgMusic.nativeElement.pause();
    this.isMusicPlaying = false;
  }
}

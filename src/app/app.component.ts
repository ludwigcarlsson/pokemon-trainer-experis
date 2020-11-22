import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  public audio: any = new Audio();
  public playing: boolean = false;
  public started: boolean = false;
  constructor () {}

  ngOnInit(): void {
  }
  
  playAudio(){
    this.audio.src = "../assets/audio/pokemon-song.mp3"
    this.audio.volume = 0.05;
    this.audio.load();
    this.audio.loop = true;
    this.audio.play();
  }

  toggleAudio() {
    if(!this.started){
      this.playAudio();
      this.started = true;
      this.playing = true;
    } else {
      if (this.playing){
        this.playing = false;
        this.audio.volume = 0;
      } else {
        this.playing = true;
        this.audio.volume = 0.05;
      }
    }
  }
}

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
    //plays the audio of a specific audio file.
  playAudio(){
    this.audio.src = "../assets/audio/pokemon-song.mp3"
    this.audio.volume = 0.05;
    this.audio.load();
    this.audio.loop = true;
    this.audio.play();
  }
  // When the user clicks the music button the audio will start. Then it has a 
  // toggle function for setting the volume to 0 and 0.05.
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

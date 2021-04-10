import { Component, OnInit } from '@angular/core';
import MP3Song from "./model/MP3Song";
import {Howl} from "howler";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'music-player-app';

  constructor() {

  }

  ngOnInit(): void
  {

  }

  songsIndex: number = 0;
  songName: string = "";
  song: MP3Song[] =
    [
      {
        name: "Bleeping Demo",
        artist: "Kevin MacLeod",
        index: 0,
        howl: new Howl({
          src: ["./assets/MP3_Files/BleepingDemo.mp3"],
          html5: true
        })
      },
      {
        name: "Cherry Monday",
        artist: "Kevin MacLeod",
        index: 1,
        howl: new Howl({
          src: ["./assets/MP3_Files/CheeryMonday.mp3"],
          html5: true
        })
      },
      {
        name: "Jerry Five",
        artist: "Kevin MacLeod",
        index: 2,
        howl: new Howl({
          src: ["./assets/MP3_Files/JerryFive.mp3"],
          html5: true
        })
      },
      {
        name: "Voxel Revolution",
        artist: "Kevin MacLeod",
        index: 3,
        howl: new Howl({
          src: ["./assets/MP3_Files/VoxelRevolution.mp3"],
          html5: true
        })
      },
      {
        name: "Almost New",
        artist: "Kevin MacLeod",
        index: 4,
        howl: new Howl({
          src: ["./assets/MP3_Files/AlmostNew.mp3"],
          html5: true
        })
      },
      {
        name: "Lotus",
        artist: "Kevin MacLeod",
        index: 5,
        howl: new Howl({
          src: ["./assets/MP3_Files/Lotus.mp3"],
          html5: true
        })
      },
      {
        name: "Mystery Sax",
        artist: "Kevin MacLeod",
        index: 6,
        howl: new Howl({
          src: ["./assets/MP3_Files/MysterySax.mp3"],
          html5: true
        })
      },
      {
        name: "Spirit of the Girl",
        artist: "Kevin MacLeod",
        index: 7,
        howl: new Howl({
          src: ["./assets/MP3_Files/SpiritOfTheGirl.mp3"],
          html5: true
        })
      },
      {
        name: "Android Sock Hop",
        artist: "Kevin MacLeod",
        index: 8,
        howl: new Howl({
          src: ["./assets/MP3_Files/AndroidSockHop.mp3"],
          html5: true
        })
      },


    ]

  play(index: number) {
    if (!this.song[index].howl.playing()) {
      this.song[index].howl.play();
      this.songsIndex = index;
      this.songName = this.song[index].name
    }
  }

  pause(index: number) {
    this.song[index].howl.pause();
    this.songsIndex = index;
  }

  stop(index: number) {

    this.song[index].howl.stop();
    this.songName = "";
  }

  skip() {
    this.songName = ""
    this.song[this.songsIndex].howl.stop();
    if (this.songsIndex == 8) {
      this.songsIndex = 0;
      this.songName = ""
    } else {
      this.songsIndex++
      this.songName = ""
    }
  }

  prev() {
    this.songName = ""
    this.song[this.songsIndex].howl.stop();
    if (this.songsIndex == 0) {
      this.songsIndex = 8
      this.songName = ""
    } else {
      this.songsIndex--;

    }

  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent {
  TweetMsg: string = ""
  TweetMaxLength: number = 240
  TweetRemain: number = this.TweetMaxLength
  SendTweet(){
    alert("Tweet Criado")
  }
  ChangeTweet() {
    this.TweetRemain = 240 - this.TweetMsg.length
  }

}

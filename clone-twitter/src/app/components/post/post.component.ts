import { Component } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent {
  TweetMsg: string = ""
  TweetMaxLength: number = 240
  TweetRemain: number = this.TweetMaxLength
  constructor(private service: MessagesService) {

  }

  SendTweet() {
    this.service.AddMessage(this.TweetMsg)
    this.TweetMsg = ""
    this.TweetRemain = this.TweetMaxLength
  }
  ChangeTweet() {
    this.TweetRemain = this.TweetMaxLength - this.TweetMsg.length
  }

}

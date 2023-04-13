import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  private messages: string[] = []

  constructor() { }
  AddMessage(message: string) {
    this.messages.push(message)
  }
  GetMessages() {
    return this.messages
  }
  ClearMessages() {
    this.messages = []
  }

}

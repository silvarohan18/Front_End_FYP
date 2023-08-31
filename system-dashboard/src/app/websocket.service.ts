import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  private socket!: WebSocket; // Add the ! operator here
  public messages: Subject<string> = new Subject<string>();

  constructor() {
    this.connect();
  }

  private connect() {
    const uri = 'ws://34.125.45.1:3000';
    this.socket = new WebSocket(uri);

    this.socket.onopen = (event) => {
      console.log('Connected to WebSocket server');
    };

    this.socket.onmessage = (event) => {
      const message = event.data;
      this.messages.next(message);
    };
  }
}
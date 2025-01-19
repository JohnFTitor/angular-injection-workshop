import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  getMessage() {
    return "You're an amazing Software Developer!"
  }
}

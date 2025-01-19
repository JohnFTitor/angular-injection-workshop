import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  message = signal('')

  protected setMessage(){
    const messageService = inject(MessageService)

    this.message.set(messageService.getMessage())
  }

  ngOnInit(): void {
    this.setMessage()
  }
}

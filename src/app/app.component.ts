import { Component } from '@angular/core';
import {Subscription, Subject} from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sub: Subscription
  stream$: Subject<number> = new Subject<number>()
  counter: 0

  constructor() {
      this.sub = this.stream$.subscribe( value => {
        console.log('Subscribe ', value)
      })
    this.counter = 0
  }

  stop() {
    this.sub.unsubscribe();
  }

  next () {
    this.counter++
    this.stream$.next(this.counter)
  }
}

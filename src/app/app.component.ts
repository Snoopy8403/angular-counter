import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from "./counter/counter.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, CounterComponent, FormsModule]
})
export class AppComponent {
  logoSrc = "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1718582400&semt=sph";
  title = 'First application';
  counters: {name: string, id: number, aim: number}[] = [];
  aim = 5;
  isCompleted = false;
  counterCount = 0;

  countChanged(count: number){
    if (count === this.aim ) {
      this.isCompleted = true;
      alert('Elértük a célt!');
    }

    if(count === 3){
      this.aim = 10;
    }
  }

  counterCountChanged() { 
     const diff = this.counterCount - this.counters.length;

     if (diff > 0) {
        const newCounters = new Array(diff).fill(undefined).map((_, i) => ({
          name: '',
          id: i + this.counters.length,
          aim: 10
        }));
        this.counters = [...this.counters, ...newCounters];
     }else if (diff < 0) {
        this.counters.splice(this.counterCount)
     }
  }
}

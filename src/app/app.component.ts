import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from "./counter/counter.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, CounterComponent]
})
export class AppComponent {
  logoSrc = "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1718582400&semt=sph";
  title = 'First application';
  counter = {name: 'Dishes', id: 1}
  aim = 5;
  isCompleted = false;

  countChanged(count: number){
    if (count === this.aim ) {
      this.isCompleted = true;
      alert('Elértük a célt!');
    }

    if(count === 3){
      this.aim = 10;
      this.counter.name = 'Szárítás';
    }
  }
}

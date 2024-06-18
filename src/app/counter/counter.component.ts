import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {

  @Input() aim = 10;
  @Input({required: false}) counter?: {name: string, id: number}
  @Output() countChange = new EventEmitter<number>();
  @ViewChild('btn') buttonRef?: ElementRef<HTMLButtonElement>

  count = 0;
  changeDetectionCounter = 0;

  incrementCounter(){
    this.count = this.count + 1;
    this.countChange.emit(this.count);
  }

  get log(){
    this.changeDetectionCounter++;
  //    console.log(this.changeDetectionCounter);
    return 'Change detection test';
  }

  get isComplete() {
    return this.count >= this.aim;
  }
}

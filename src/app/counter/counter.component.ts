import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy  {

  @Input() aim = 10;
  @Input({required: false}) counter?: {name: string, id: number}
  @Output() countChange = new EventEmitter<number>();
  @ViewChild('btn') buttonRef?: ElementRef<HTMLButtonElement>

  count = 0;
  changeDetectionCounter = 0;

  constructor(){
    console.log('constructor');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('onChanges', changes);
  }
  ngOnInit(): void {
    console.log('onInit');
  }
  ngAfterViewInit(): void {
    console.log('afterViewInit');
    //this.buttonRef!.nativeElement.textContent = 'Set from TS';
  }
  ngOnDestroy(): void {
    console.log('onDestroy');
  }

  incrementCounter(){
    this.count = this.count + 1;
    this.countChange.emit(this.count);
  }

  get log(){
    this.changeDetectionCounter++;
  //    console.log(this.changeDetectionCounter);
    return 'Change detection test';
  }
}

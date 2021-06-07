import { Note } from './../../../model/note';
import { Component, Input, OnInit, Output, EventEmitter, ViewEncapsulation, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class NoteItemComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input()
  note: string = "";

  @Input()
  noteIndex: number = -1;

  @Output()
  deleteNote: EventEmitter<number> = new EventEmitter<number>();

  intervalId: number = 0;
  timer: number = 0;
  timeoutId: number = 0;

  handleDeleteClick() {
    this.deleteNote.emit(this.noteIndex);
  }
  
  constructor() { 
    console.log(`%c NoteItemComponent::constructor: Called on Component/Directive instantation by Angular: ${ this.note }`, 
    "color: white; background-color: black;")
  }

  ngOnChanges(): void {
    console.log(`%c NoteItemComponent::ngOnChanges: Called on every @Input property changes: ${ this.note }`, 
    "color: blue;")

    this.intervalId = setInterval(() => {
      this.timer++;
      console.log('Timer logged from the setInterval:: ', this.timer);
    }, 1000);

    this.timeoutId = setTimeout(() => {
      console.log('Logged from the setTimout.')
    }, 5000);

    console.log(`intervalId is : ${ this.intervalId}`);
    console.log(`timeoutId is : ${ this.timeoutId}`);
  }

  ngOnInit(): void {
    console.log(`%c NoteItemComponent::ngOnInit: Called after first ngOnChanges: ${ this.note }`, 
    "color: green;")
  }

  ngDoCheck(): void {
    console.log(`%c NoteItemComponent::ngDoCheck: Called after first ngOnInit and then after every ngOnChanges`, 
    "color: orange;");
  }

  ngAfterContentInit(): void {
    console.log(`%c NoteItemComponent::ngAfterContentInit: Called after first ngDoCheck when Angular has finished projuecting content in Child Component`, 
    "color: green;");
  }

  ngAfterContentChecked(): void {
    console.log(`%c NoteItemComponent::ngAfterContentChecked: Called once after ANgular has checked the Projected content while running it's changeDetection cycle and after every ngDoCheck:`, 
    "color: orange;");
  }

  ngAfterViewInit(): void {
    console.log(`%c NoteItemComponent::ngAfterViewInit: Called once after Angular has initialized the view of a component and all it's children`, 
    "color: green;");
  }

  ngAfterViewChecked(): void {
    console.log(`%c NoteItemComponent::ngAfterViewChecked: Called once after Angular has checked the View of a Component and all it's children while runing it's ChangeDetection cycle and after every ngAfterContentChecked`, 
    "color: orange;");
  }

  ngOnDestroy(): void {
    console.log(`%c NoteItemComponent::ngOnDestroy: Called just before the Angualr is going to destroy the component: ${ this.note }`, 
    "color: red;");
    clearInterval(this.intervalId);
    clearTimeout(this.timeoutId);
  }

}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Note } from 'src/app/model/note';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NoteListComponent implements OnInit {

  note: string = "";
  notes: Array<Note> = [];

  constructor() { }

  addNote() {
    this.notes.push({message: this.note});
    this.note = '';
  }

  changeFirstNote() {
    this.notes[0].message = "This note just got changed";
  }

  deleteNote(indexToDelete: number) {
    this.notes.splice(indexToDelete, 1);
  }

  triggerChangeDetection() {

  }

  ngOnInit(): void {
  }

}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoteListComponent } from './components/note-list/note-list.component';
import { NoteItemComponent } from './components/note-list/note-item/note-item.component';
import { FormsModule } from '@angular/forms';
import { MessageListComponent } from './components/viewQueries/message-list/message-list.component';
import { MessageComponent } from './components/viewQueries/message-list/message/message.component';
import { ParentComponent } from './components/changeDetection/parent/parent.component';
import { ChildComponent } from './components/changeDetection/parent/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteListComponent,
    NoteItemComponent,
    MessageListComponent,
    MessageComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

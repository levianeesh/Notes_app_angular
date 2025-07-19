import { Component } from '@angular/core';
import { NotesService } from '../services/notes.service';
import { Note } from '../note.model';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css',
})
export class NotesComponent {
  notes: Note[] = [];
  newNote: Note = { title: '', content: '' };

  constructor(private notesService: NotesService) {}

  ngOnInit() {
    this.loadNotes();
  }

  loadNotes() {
    this.notesService.getNotes().subscribe((data) => {
      this.notes = data;
    });
  }

  addNote() {
    if (this.newNote.title && this.newNote.content) {
      this.notesService.addNote(this.newNote).subscribe(() => {
        this.newNote = { title: '', content: '' };
        this.loadNotes();
      });
    }
  }

  deleteNote(id: string) {
    this.notesService.deleteNote(id).subscribe(() => {
      this.loadNotes();
    });
  }
}

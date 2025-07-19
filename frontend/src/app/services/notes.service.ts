import { Injectable } from '@angular/core';
import { Note } from '../note.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class NotesService {
  private baseUrl = 'http://localhost:3000/notes';

  constructor(private http: HttpClient) {}

  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.baseUrl);
  }

  addNote(note: Note): Observable<Note> {
    return this.http.post<Note>(this.baseUrl, note);
  }

  deleteNote(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}

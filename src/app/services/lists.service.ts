import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ListItem {
  content: string;
}

export interface ListDetails {
  description: string;
  isPublic: boolean;
  title: string;
  userId: number;
}

export interface List {
  listDetails: ListDetails;
  listItems: ListItem[];
}

@Injectable({
  providedIn: 'root'
})
export class ListsService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  createList(payload: List): Observable<any> {
    return this.http.post(`${this.apiUrl}/lists`, payload);
  }

  getFeaturedLists(): Observable<any> {
    return this.http.get(`${this.apiUrl}/lists/featured`);
  }

  getListsBySearchTerm(searchTerm: string): Observable<List[]> {
    return this.http.get<List[]>(`${this.apiUrl}/lists/search?term=${searchTerm}`);
  }
}

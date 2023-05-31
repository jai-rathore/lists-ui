import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { List, ListsService } from '../services/lists.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  searchResults!: List[];
  searching = false;
  keyword: string = '';
  constructor(private router: Router, private listsService: ListsService) {}

  createList() {
    this.router.navigate(['/create-list']);
  }

  search(keyword: string): void {
    this.searching = true;
    this.listsService.searchLists(keyword).subscribe(results => {
      this.searchResults = results;
    });
  }
}
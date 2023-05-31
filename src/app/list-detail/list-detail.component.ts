import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListsService } from '../services/lists.service';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.css']
})
export class ListDetailComponent implements OnInit {

  listId!: number;
  list: any;

  constructor(
    private route: ActivatedRoute,
    private listsService: ListsService
  ) { }

  ngOnInit(): void {
    // get list id from route parameters
    this.route.params.subscribe(params => {
      this.listId = params['id'];

      // get list details from service
      this.listsService.getListDetails(this.listId).subscribe(list => {
        this.list = list;
      });
    });
  }
}

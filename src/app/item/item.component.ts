import { Component, OnInit } from '@angular/core';
import { Item, ItemService } from '../item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  items: Item[] = [];
  constructor( private itemService : ItemService) { }

  ngOnInit(): void {
    this.getItems();
  }

  /**? get all items of the list */
  getItems():void {
    this.itemService.getItems().subscribe(items=> this.items = items)
  }

}

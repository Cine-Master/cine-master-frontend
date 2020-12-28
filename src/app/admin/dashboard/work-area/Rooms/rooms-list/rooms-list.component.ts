import {Component, Inject, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {ItemComponent} from '../../item/item.component';
import {ShowRoom} from '../../../../../model/ShowRoom';
import {WorkAreaComponent} from '../../work-area.component';
import {RoomsListService} from './services/rooms-list.service';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RoomsListComponent implements OnInit, ItemComponent {
  @Input() type: string;
  public data: ShowRoom[];
  public loaded = false;
  constructor(@Inject(WorkAreaComponent) private parent: WorkAreaComponent, private service: RoomsListService) {}

  ngOnInit(): void {
    this.service.getRooms().subscribe(response => {
      this.data = response;
      this.loaded = true;
    }, error => {
      alert('Qualcosa è andato storto!');
    });
  }

}

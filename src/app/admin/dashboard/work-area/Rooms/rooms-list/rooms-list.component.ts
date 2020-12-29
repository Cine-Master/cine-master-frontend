import {Component, Inject, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {ItemComponent} from '../../item/item.component';
import {EventRoom} from '../../../../../model/EventRoom';
import {WorkAreaComponent} from '../../work-area.component';
import {RoomsListService} from './services/rooms-list.service';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css']
})
export class RoomsListComponent implements OnInit, ItemComponent {
  @Input() type: string;
  public data: EventRoom[];
  public loaded = false;
  public standard: string[] = [];
  public premium: string[] = [];
  public vip: string[] = [];
  public rowLetters: string[] ;
  public columnNumber: number[];
  public actualPlant: string;

  private rowName(n): string {
    const ordA = 'A'.charCodeAt(0);
    const ordZ = 'Z'.charCodeAt(0);
    const len = ordZ - ordA + 1;
    let s = '';
    while (n >= 0) {
      s = String.fromCharCode(n % len + ordA) + s;
      n = Math.floor(n / len) - 1;
    }
    return s;
  }


  constructor(@Inject(WorkAreaComponent) private parent: WorkAreaComponent, private service: RoomsListService) {}

  ngOnInit(): void {
    this.service.getRooms().subscribe(response => {
      this.data = response;
      this.loaded = true;
      this.renderPlant(this.data[0]);
    }, error => {
      alert('Qualcosa è andato storto!');
    });
  }

  public getStatus( seatPos: string ): string {
    if (this.vip.indexOf(seatPos) !== -1) {
      return 'vip';
    } else if (this.standard.indexOf(seatPos) !== -1) {
      return 'standard';
    }
    else if (this.premium.indexOf(seatPos) !== -1) {
      return 'premium';
    }
  }

  public renderPlant(data: any): void {
    this.actualPlant = data.id;
    this.premium = [];
    this.standard = [];
    this.vip = [];
    this.rowLetters = new Array(data.nRows);
    this.columnNumber = Array.from({length: data.nColumns}, (_, i) => i + 1);
    for (let i = 0; i < data.nRows; i++) {
      this.rowLetters[i] = this.rowName(i);
    }
    for (const seat of data.seats) {
      if (seat.seatType === 'STANDARD') {
        this.standard.push(seat.row.concat(String(seat.column)));
      }
      else if (seat.seatType === 'PREMIUM') {
        this.premium.push(seat.row.concat(String(seat.column)));
      }
      else if (seat.seatType === 'VIP') {
        this.vip.push(seat.row.concat(String(seat.column)));
      }
    }
  }

}

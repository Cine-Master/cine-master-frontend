import {Component, Inject, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {ItemComponent} from '../item/item.component';
import {WorkAreaComponent} from '../work-area.component';
import {RoomCreatorService} from './services/room-creator.service';
import {TextBoxModel} from '@syncfusion/ej2-inputs';

@Component({
  selector: 'app-room-creator',
  templateUrl: './room-creator.component.html',
  styleUrls: ['./room-creator.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RoomCreatorComponent implements OnInit, ItemComponent {
  @Input() type: string;
  public name: string;
  public rows = 1;
  public columns = 1;
  public rowLetters: string[] = ['A'];
  public columnNumber: number[]  = [1];
  public standard: string[] = [];
  public premium: string[] = [];
  public vip: string[] = [];
  public actual = 'standard';
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


  constructor(@Inject(WorkAreaComponent) private parent: WorkAreaComponent, private service: RoomCreatorService) { }

  ngOnInit(): void {
  }

  public renderPlant(): void{
    this.rowLetters = new Array(this.rows);
    this.columnNumber = Array.from({length: this.columns}, (_, i) => i + 1);
    for (let i = 0; i < this.rows; i++) {
      this.rowLetters[i] = this.rowName(i);
    }
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

  public clearSelected(): void {
    this.vip = [];
    this.premium = [];
    this.standard = [];
  }

  public seatClicked( seatPos: string ): void {
    let index;
    switch ( this.actual ) {
      case 'standard':
        index = this.standard.indexOf(seatPos);
        if (index !== -1) {
          this.standard.splice(index, 1);
        }
        else {
          if ( this.vip.indexOf(seatPos) === -1 && this.premium.indexOf(seatPos) === -1) {
            this.standard.push(seatPos);
          }
        }
        break;
      case 'premium':
        index = this.premium.indexOf(seatPos);
        if (index !== -1) {
          this.premium.splice(index, 1);
        }
        else {
          if ( this.vip.indexOf(seatPos) === -1 && this.standard.indexOf(seatPos) === -1) {
            this.premium.push(seatPos);
          }
        }
        break;
      case 'vip':
        index = this.vip.indexOf(seatPos);
        if (index !== -1) {
          this.vip.splice(index, 1);
        }
        else {
          if ( this.standard.indexOf(seatPos) === -1 && this.premium.indexOf(seatPos) === -1) {
            this.vip.push(seatPos);
          }
        }
        break;
    }
  }

  public setActual(actual: string): void {
    this.actual = actual;
  }

  public saveRoom(): void {
    const room = this.parseRoom();
    this.service.saveRoom(room).subscribe(response => {
      alert('Stanza Salvata');
    }, error => {
      alert('Ops.. C\'è stato un problema! \nRiprova perfavore...');
    });
  }

  private parseRoom(): object {
    const room = {
      name: this.name,
      nRows: this.rows,
      nColumns: this.columns,
      seats: []
    };
    if (this.standard.length === 0 && this.premium.length === 0 && this.vip.length === 0) {

      for (let i = 0; i < this.rows; i++) {
        for (let j = 1; j <= this.columns; j++ ) {
          room.seats.push({
            row: this.rowName(i),
            column: j,
            seatType: 'STANDARD'
          });
        }
      }

    }
    else {

      const re = new RegExp(/([A-Z]+)(\d+)/, 'i');
      for (const e of this.standard) {
        const x = re.exec(e);
        room.seats.push({
          row: x[1],
          column: x[2],
          seatType: 'STANDARD'
        });
      }
      for (const e of this.premium) {
        const x = re.exec(e);
        room.seats.push({
          row: x[1],
          column: x[2],
          seatType: 'PREMIUM'
        });
      }
      for (const e of this.vip) {
        const x = re.exec(e);
        room.seats.push({
          row: x[1],
          column: x[2],
          seatType: 'VIP'
        });
      }
    }
    return room;
  }


}

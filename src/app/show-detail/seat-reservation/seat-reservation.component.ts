import {Component, Inject, OnInit} from '@angular/core';
import {ShowDetailComponent} from '../show-detail.component';

@Component({
  selector: 'app-seat-reservation',
  templateUrl: './seat-reservation.component.html',
  styleUrls: ['./seat-reservation.component.css']
})
export class SeatReservationComponent implements OnInit {

  public movieTitle: string;
  public date: string;
  public hour: string;

  rows: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  cols: number[]  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  reserved: string[] = ['A2', 'A3', 'F5', 'F1', 'F2', 'F6', 'F7', 'F8', 'H1', 'H2', 'H3', 'H4'];
  selected: string[] = [];

  ticketPrice = 120;
  convFee = 30;
  totalPrice = 0;
  currency = '€';

  constructor(@Inject(ShowDetailComponent) private showDetail: ShowDetailComponent) {
    this.movieTitle = showDetail.show.title;
  }

  public loadData(date: string, hour: string): void {
    this.date = date;
    this.hour = hour;
  }

  ngOnInit(): void {
  }

  public getStatus( seatPos: string ): string {
    if (this.reserved.indexOf(seatPos) !== -1) {
      return 'reserved';
    } else if (this.selected.indexOf(seatPos) !== -1) {
      return 'selected';
    }
  }

  public clearSelected(): void {
    this.selected = [];
  }

  public seatClicked( seatPos: string ): void {
    const index = this.selected.indexOf(seatPos);

    if (index !== -1) {
      // seat already selected, remove
      this.selected.splice(index, 1);
    } else {
      // push to selected array only if it is not reserved
      if ( this.reserved.indexOf(seatPos) === -1 ) {
        this.selected.push(seatPos);
      }

    }
  }

  public showSelected(): void {
    if (this.selected.length > 0) {
      alert('Selected Seats: ' + this.selected + '\nTotal: ' + (this.ticketPrice * this.selected.length + this.convFee));
    } else {
      alert('No seats selected!');
    }
  }

}

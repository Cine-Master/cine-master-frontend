import {Component, OnInit, ViewChild} from '@angular/core';
import {ShowDetailService} from './services/show-detail.service';
import {ActivatedRoute} from '@angular/router';
import {SeatReservationComponent} from './seat-reservation/seat-reservation.component';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.css']
})
export class ShowDetailComponent implements OnInit {
  @ViewChild('seatReservationComponent')
  private seatReservation: SeatReservationComponent;
  public show = {
    title: 'Average',
    description: 'NICE',
    duration: '344',
    actors: 'Alviano',
    directors: 'Alviano',
    genres: 'AAAA',
    release: 'Above',
    language: 'Iraniano',
    progr: [{
      date: '10 Dic 2020',
      hours: ['20:00', '22:00']
    }],
    location: ''};
  public loaded = false;
  public wantsToBuy = false;
  constructor(private service: ShowDetailService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.loadData();
  }

  // TODO: modificare in base alle nuove api implementate
  private loadData(): void {
    this.service.getShowDetail(this.route.snapshot.params.id).subscribe(response => {
      const start = new Date();
      const [hours, minutes, seconds] = response.startTime.split(':');
      start.setHours(hours);
      start.setMinutes(minutes);
      start.setSeconds(seconds);
      const end = new Date();
      const [hours1, minutes1, seconds1] = response.endTime.split(':');
      end.setHours(hours1);
      end.setMinutes(minutes1);
      end.setSeconds(seconds1);
      const dur = end.getTime() - start.getTime();
      const duration = '' + Math.floor(dur / 3600000) + ' h ' + dur % 3600000 + ' min';
      this.show.title = response.name;
      this.show.description = response.description;
      this.show.duration = duration;
      let act = '';
      for (const a of response.actors) {
        act += a.name + ' ';
      }
      this.show.actors = act;
      let dir = '';
      for (const a of response.directors) {
        dir += a.name + ' ';
      }
      this.show.directors = dir;
      let gen = '';
      for (const a of response.categories) {
        gen += a.name + ' ';
      }
      this.show.genres = gen;
      this.show.language = response.language;
      this.show.progr[0].date = new Date(response.date).toLocaleDateString('it-IT',
        {weekday: 'long', year: 'numeric', month: 'long', day: '2-digit'});
      this.show.progr[0].hours[0] = start.toLocaleString('it-IT', {hour: '2-digit', minute: '2-digit'});
      this.show.release = '15/02/2020';
      this.show.location = response.productionLocation;
      this.loaded = true;
    }, error => {
      window.location.href = 'http://localhost:4200/error404';
    });
  }

  public renderSeatPlan(date: string, hour: string): void{
    this.seatReservation.loadData(date, hour);
  }

}

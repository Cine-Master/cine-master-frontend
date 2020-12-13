import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  toggled = '';
  elements = [{name: 'Spettacoli', opened: false}, {name: 'Sale', opened: false},  {name: 'Film', opened: false}];

  constructor() { }

  ngOnInit(): void {
  }

  public toggle(): void {
    if (this.toggled === 'toggled') {
      this.toggled = '';
    }
    else {
      this.toggled = 'toggled';
    }
    console.log(this.toggled);
  }

  public showElements(type: string): void{
    for (const e of this.elements){
      if (e.name === type) {
        e.opened = !e.opened;
      }
    }
  }

}

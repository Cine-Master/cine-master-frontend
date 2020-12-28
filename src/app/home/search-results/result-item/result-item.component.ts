import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.css']
})
export class ResultItemComponent implements OnInit {

  @Input() id: number;
  @Input() name: string;
  @Input() photoUrl: string;
  @Input() language: string;
  @Input() length: number;
  @Input() releaseDate: string;
  @Input() description: string;
  @Input() categories: object[];
  @Input() directors: object[];
  @Input() actors: object[];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToShowDetail(): void {
    this.router.navigate(['show/' + this.id.toString()]);
  }
}

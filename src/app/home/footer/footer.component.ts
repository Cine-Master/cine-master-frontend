import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { AgmCoreModule } from '@agm/core';

declare var H: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, AfterViewInit {

  @ViewChild('map')
  public mapElement: ElementRef;
  private platform: any;
  constructor() {
    this.platform = new H.service.Platform({
      apikey: '4dvChLnlVU4kBCq9eXr9OMspNtQuIlOYKLRS1tiG9iE'
    });
  }

  ngOnInit(): void {
  }

  public ngAfterViewInit(): void {
    const defaultLayers = this.platform.createDefaultLayers();
    const map = new H.Map(
      this.mapElement.nativeElement,
      defaultLayers.vector.normal.map,
      {
        zoom: 30,
        center: { lat: 39.355735, lng: 16.227279 }
      }
    );
    const parisMarker = new H.map.Marker({lat: 39.355735, lng: 16.227279});
    map.addObject(parisMarker);
    window.addEventListener('resize', () => map.getViewPort().resize());
    const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
  }

}

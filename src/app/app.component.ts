import { Component } from '@angular/core';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Alta Planning Map App';
  zoom = 12;

  // initial center map position
  lat = 45.515160;
  lng = -122.594967;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`);
  }

  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }

  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

  markers: marker[] = [
	  {
		  lat: 45.515160,
		  lng: -122.594967,
		  label: 'A',
		  draggable: true
	  },
	  {
		  lat: 45.517921,
		  lng: -122.660986,
		  label: 'B',
		  draggable: true
	  },
	  {
		  lat: 45.517113,
		  lng: -122.675333,
		  label: 'C',
		  draggable: true
	  }
  ];
}

interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}

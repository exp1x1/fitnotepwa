import {Component, signal} from '@angular/core';

// import {SwUpdate} from '@angular/service-worker';

@Component({
  imports: [],
  selector: 'app-root',
    styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

  // private swUpdate = inject(SwUpdate);

  constructor() {
    // if (this.swUpdate.isEnabled) {
    //   this.swUpdate.versionUpdates.subscribe(evt => {
    //     if (evt.type === 'VERSION_READY') {
    //       if (confirm('A new software version is available. Load update?')) {
    //         window.location.reload();
    //       }
    //     }
    //   });
    // }
  }
}

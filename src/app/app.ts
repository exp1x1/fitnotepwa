import {Component, signal, inject} from '@angular/core';
import {SupabaseService} from './supabase/supabase';

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

  // private swUpdate = inject(SwUpdate);
  private client = inject(SupabaseService);

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

    this.client.getUser().then((user) => {
      console.log(user)
    })
  }
}

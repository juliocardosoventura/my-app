import {Injectable} from '@angular/core';
import {SwUpdate} from '@angular/service-worker';
@Injectable({ providedIn: 'root' })
export class PromptUpdateService {
  constructor(swUpdate: SwUpdate) {
    if (swUpdate.isEnabled) {
      swUpdate.available.subscribe(event => {
        swUpdate.activateUpdate().then(() => {
          document.location.reload();
        });
      });
    }
  }
}

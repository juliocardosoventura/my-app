import { Component } from '@angular/core';
import { CheckForUpdateService } from '@core/services/check-for-update.service';
import { LogUpdateService } from '@core/services/log-update.service';
import { PromptUpdateService } from '@core/services/prompt-update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private checkForUpdateService: CheckForUpdateService,
              private logUpdateService: LogUpdateService,
              private promptUpdateService: PromptUpdateService) {
  }
}

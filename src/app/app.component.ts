import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApplicationState } from './store/states/application.state';
import { ChangeGlobalTestAction } from './store/actions/global.actions';
import { TranslateService } from '@ngx-translate/core';
import { EN, RU } from './constants/global.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // EN = EN;
  // RU = RU;
  globalState;
  constructor(private store: Store<ApplicationState>,
              public translateService: TranslateService) {
    this.store.select(state => state.globalState)
      .subscribe((res) => {
        this.globalState = res;
      });

    setTimeout(() => {
      this.store.dispatch(new ChangeGlobalTestAction('test'));
    }, 3000);
    this.translateService.addLangs([EN, RU]);
    this.translateService.setDefaultLang(EN);
  }
}

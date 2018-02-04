import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApplicationState } from './store/states/application.state';
import { ChangeGlobalTestAction } from './store/actions/global.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  globalState;
  constructor(private store: Store<ApplicationState>) {
    this.store.select(state => state.globalState)
      .subscribe((res) => {
        this.globalState = res;
      });

    setTimeout(() => {
      this.store.dispatch(new ChangeGlobalTestAction('test'));
    }, 3000);
  }
}

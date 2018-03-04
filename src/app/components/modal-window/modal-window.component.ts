import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {ApplicationState} from '../../store/states/application.state';
import {Observable} from 'rxjs/Observable';
import {CloseModalWindowAction} from '../../store/actions/global.actions';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent implements OnInit {
  modalState$: Observable<boolean>;

  constructor(private store: Store<ApplicationState>) {
    this.modalState$ = store.select(state => state.globalState.modalWindow)
      .do(console.log)
      .distinctUntilChanged();
  }

  closeModalWindow(): void {
    this.store.dispatch(new CloseModalWindowAction());
  }
  ngOnInit() {
  }

}

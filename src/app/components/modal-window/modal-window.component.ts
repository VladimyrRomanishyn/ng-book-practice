import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApplicationState } from '../../store/states/application.state';
import { Observable } from 'rxjs/Observable';
import { CloseModalWindowAction } from '../../store/actions/global.actions';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss'],
  animations: [
    trigger('modalWindow', [
      state('false', style({
        background: 'rgba(255,255,255,0)',
        display: 'none'
      })),
      state('true', style({
        background: 'rgba(0,0,0,.7)',
        left: '0',
        right: '0',
        top: '0',
        bottom: '0',
        position: 'absolute',
        display: 'block'
      })),
      transition('true <=> false', animate('300ms ease-in'))])
  ]
})
export class ModalWindowComponent implements OnInit {
  modalState: string;

  constructor(private store: Store<ApplicationState>) {
    store.select( appState => appState.globalState.modalWindow)
      .do(console.log)
      .shareReplay()
      .subscribe((modalState) => {
        this.modalState = modalState;
      });
  }

  closeModalWindow(): void {
    this.store.dispatch(new CloseModalWindowAction());
  }
  ngOnInit() {
  }

}

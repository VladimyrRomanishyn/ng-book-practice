import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';

export const fadeInTrigger = trigger('modalWindow', [
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
  transition('true <=> false', animate('300ms ease-in'))]);

export const keyFramesTrigger =   trigger('modalWindow', [
  state('false', style({
    display: 'none'
  })),
  state('true', style({
    display: 'block',
    left: '0',
    right: '0',
    top: '0',
    bottom: '0',
    position: 'absolute',
    background: 'rgba(0,0,0,.7)'
  })),
  transition('true => false', [
    animate(300, keyframes([
      style({
        background: 'rgba(0,0,0,.7)',
        left: '0',
        right: '0',
        top: '0',
        bottom: '0',
        position: 'absolute',
        display: 'block',
        offset: 0}),
      style({
        background: 'rgba(0,0,0,.5)',
        left: '0',
        right: '0',
        top: '0',
        bottom: '0',
        position: 'absolute',
        display: 'block',
        offset: 0.7
      }),
      style({
        background: 'rgba(0,0,0,.2)',
        left: '0',
        right: '0',
        top: '0',
        bottom: '0',
        position: 'absolute',
        display: 'block',
        offset: 1
      })
    ]))
  ]),
  transition('false => true', [
    animate(300, keyframes([
      style({
        background: 'rgba(0,0,0,.2)',
        left: '0',
        right: '0',
        top: '0',
        bottom: '0',
        position: 'absolute',
        display: 'block',
        offset: 0}),
      style({
        background: 'rgba(0,0,0,.5)',
        left: '0',
        right: '0',
        top: '0',
        bottom: '0',
        position: 'absolute',
        display: 'block',
        offset: 0.7
      }),
      style({
        background: 'rgba(0,0,0,.7)',
        left: '0',
        right: '0',
        top: '0',
        bottom: '0',
        position: 'absolute',
        display: 'block',
        offset: 1
      })
    ]))
  ])
]);

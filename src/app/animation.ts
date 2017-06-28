import { trigger, state, style, transition, animate, group } from '@angular/core';

export const slideIn =
  trigger(
    "slideIn",
    [
      transition(
        "void => prev", // ---> Entering --->
        [
          // In order to maintain a zIndex of 2 throughout the ENTIRE
          // animation (but not after the animation), we have to define it
          // in both the initial and target styles. Unfortunately, this
          // means that we ALSO have to define target values for the rest
          // of the styles, which we wouldn't normally have to.
          style({
            left: -100,
            opacity: 0.0,
            zIndex: 2
          }),
          animate(
            "200ms ease-in-out",
            style({
              left: 0,
              opacity: 1.0,
              zIndex: 2
            })
          )
        ]
      ),
      transition(
        "prev => void", // ---> Leaving --->
        [
          animate(
            "200ms ease-in-out",
            style({
              left: 100,
              opacity: 0.0
            })
          )
        ]
      ),
      transition(
        "void => next", // <--- Entering <---
        [
          // In order to maintain a zIndex of 2 throughout the ENTIRE
          // animation (but not after the animation), we have to define it
          // in both the initial and target styles. Unfortunately, this
          // means that we ALSO have to define target values for the rest
          // of the styles, which we wouldn't normally have to.
          style({
            left: 100,
            opacity: 0.0,
            zIndex: 2
          }),
          animate(
            "200ms ease-in-out",
            style({
              left: 0,
              opacity: 1.0,
              zIndex: 2
            })
          )
        ]
      ),
      transition(
        "next => void", // <--- Leaving <---
        [
          animate(
            "200ms ease-in-out",
            style({
              left: -100,
              opacity: 0.0
            })
          )
        ]
      )
    ]
  )
//   trigger('slideIn', [
//     transition(':enter', [
//       style({ transform: 'translateX(-100%)' }),
//       animate(350)
//     ]),
//     transition(':leave', [
//       group([
//         animate('0.2s ease', style({
//           transform: 'translate(150px,25px)'
//         })),
//         animate('0.5s 0.2s ease', style({
//           opacity: 0
//         }))
//       ])
//     ])
// ]);
// trigger('slideIn', [
//   state('*', style({
//     transform: 'translateX(-100%)',
//   })),
//   state('in', style({
//     transform: 'translateX(-100%)',

//   })),
//   state('out', style({
//     // transform: 'translateX(-100%)',
//   })),
//   transition('* => in', [
//     group([
//       animate('0.2s ease', style({
//         transform: 'translate(100%)'
//       })),
//       animate('0.5s 0.2s ease', style({
//         opacity: 0
//       })),
//       animate(350)
//     ])
//   ]),
//   transition('in => out', [
//     group([
//       animate('600ms ease-in', style({
//         transform: 'translate(-100%)'
//       })),
//       animate('0.5s 0.2s ease', style({
//         opacity: 0
//       })),
//       animate(350)
//     ])
//   ])
// ]);

export const focusPanel =
  trigger('focusPanel', [
    state('inactive', style({
      transform: 'scale(1)',
    })),
    state('active', style({
      transform: 'scale(1.1)',
      backgroundColor: '#03A9F4',
      zIndex: 1
    })),
    transition('inactive => active', animate('100ms ease-in')),
    transition('active => inactive', animate('100ms ease-out'))
  ]);
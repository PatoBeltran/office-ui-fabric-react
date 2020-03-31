import * as React from 'react';
import createSvgIcon from '../utils/createSvgIcon';

const CallControlCloseTrayIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="8 8 16 16" className={classes.svg}>
      <path
        d="M23.25,9.2031c0.2295,0.1357,0.4111,0.3179,0.5469,0.5469C23.9326,9.9795,24,10.2295,24,10.5v9
      c0,0.2705-0.0674,0.5205-0.2031,0.75s-0.3174,0.4111-0.5469,0.5469S22.7705,21,22.5,21h-1c-0.1357,0-0.2529-0.0498-0.3516-0.1484
      S21,20.6357,21,20.5c0-0.1406,0.0498-0.2588,0.1484-0.3555S21.3643,20,21.5,20h1c0.1357,0,0.2529-0.0498,0.3516-0.1484
      S23,19.6357,23,19.5v-9c0-0.1406-0.0498-0.2588-0.1484-0.3555C22.7529,10.0483,22.6357,10,22.5,10h-13
      c-0.1357,0-0.2529,0.0483-0.3516,0.1445C9.0493,10.2412,9,10.3594,9,10.5v9c0,0.1357,0.0493,0.2529,0.1484,0.3516
      C9.2471,19.9502,9.3643,20,9.5,20h1c0.1353,0,0.2524,0.0479,0.3516,0.1445C10.9502,20.2412,11,20.3594,11,20.5
      c0,0.1357-0.0498,0.2529-0.1484,0.3516C10.7524,20.9502,10.6353,21,10.5,21h-1c-0.271,0-0.521-0.0674-0.75-0.2031
      c-0.2295-0.1357-0.4116-0.3174-0.5469-0.5469C8.0674,20.0205,8,19.7705,8,19.5v-9c0-0.2705,0.0674-0.5205,0.2031-0.75
      C8.3384,9.521,8.5205,9.3389,8.75,9.2031C8.979,9.0679,9.229,9,9.5,9h13C22.7705,9,23.0205,9.0679,23.25,9.2031z M19.7158,18.7979
      c-0.377-0.4004-1.0654-0.3896-1.4209-0.0107L17,20.082v-6.0898c0-0.2705-0.1025-0.5146-0.2949-0.7051
      c-0.3848-0.3848-1.0186-0.3877-1.4102,0C15.1016,13.4805,15,13.7236,15,13.9922v6.0898l-1.2842-1.2842
      c-0.377-0.4004-1.0654-0.3896-1.4209-0.0107C12.1016,18.9805,12,19.2236,12,19.4922c0,0.2754,0.1035,0.5205,0.2988,0.709
      l2.998,2.998C15.4951,23.3955,15.7383,23.5,16,23.5c0.2637,0,0.5068-0.1045,0.7051-0.3027l3-3
      C19.8984,20.0039,20,19.7607,20,19.4922C20,19.2422,19.9033,19.0039,19.7158,18.7979z"
      />
    </svg>
  ),
  displayName: 'CallControlCloseTrayIcon',
});

export default CallControlCloseTrayIcon;

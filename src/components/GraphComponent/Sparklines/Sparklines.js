import React from 'react';
import {
  Sparklines,
  SparklinesLine,
  SparklinesSpots,
  SparklinesReferenceLine
} from 'react-sparklines';

const Sparkline = props => (
  <div className="graph">
    <Sparklines data={props.data}>
      <SparklinesLine color="#d7b603" style={{ fill: 'none' }} />
      <SparklinesSpots style={{ fill: '#ffffff' }} />
      <SparklinesReferenceLine type="median" />
    </Sparklines>
  </div>
);

export default Sparkline;

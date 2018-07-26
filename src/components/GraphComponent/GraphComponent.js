import React from 'react';

import './GraphComponent.css';
import Sparklines from './Sparklines/Sparklines';

const GraphComponent = props => (
  <div className="graph-container">
    <div className="graph-info">
      <span>
        <i className="fa fa-caret-left" />
      </span>
      <span>Temperature variation during next 7 days</span>
      <span>
        <i className="fa fa-caret-right" />
      </span>
    </div>
    <Sparklines data={props.data} />
  </div>
);

export default GraphComponent;

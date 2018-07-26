import React from 'react';

import TodayWeather from '../TodayWeather/TodayWeather';
import ListComponent from '../ListComponent/ListComponent';
import GraphComponent from '../GraphComponent/GraphComponent';

const MainAppLayout = props => (
  <React.Fragment>
    <div className="app-today">
      <TodayWeather
        data={props.data.todayComponentData}
        unit={props.data.unit}
      />
    </div>
    <div className="app-list-graph">
      <GraphComponent data={props.data.graphComponentData} />
      <ListComponent data={props.data.listComponentData} />
    </div>
  </React.Fragment>
);

export default MainAppLayout;

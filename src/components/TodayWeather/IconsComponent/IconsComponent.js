import React from 'react';

import { getIconClassName } from '../../../utils/utils';

const IconsComponent = props => {
  const iconClass = getIconClassName(props.weatherId);
  return (
    <div className="icon-desc-container">
      <div className="icon-conatainer">
        <i
          className={`wi wi-owm-${props.weatherId} weather-icon ${iconClass}`}
        />
      </div>
      <div className="weather-desc">{props.description}</div>
    </div>
  );
};

export default IconsComponent;

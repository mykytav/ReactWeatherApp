import React from 'react';

import './ListComponent.css';
import SingleListItem from './SingleListItem/SingleListItem';

const ListComponent = props => {
  const items = props.data.map(singleDayData => (
    <SingleListItem key={singleDayData.day} data={singleDayData} />
  ));
  return <div className="list-container">{items}</div>;
};

export default ListComponent;

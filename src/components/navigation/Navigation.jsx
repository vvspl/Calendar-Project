import { now } from 'moment';
import React from 'react';

import { days } from '../../utils/dateUtils.js';

const Navigation = ({ weekDates }) => {
  let isCurrentDateOnPage = weekDates.some(
    dayDate =>
      dayDate.getDate() === new Date().getDate() &&
      dayDate.getMonth() === new Date().getMonth() &&
      dayDate.getYear() === new Date().getYear(),
  );

  let clsNam = '';

  return (
    <header className="calendar__header">
      {weekDates.map(dayDate => (
        <div className="calendar__day-label day-label" >
             {
          dayDate.getDate() === new Date().getDate() && isCurrentDateOnPage
            ? (clsNam = 'day-label__day-name-now')
            : (clsNam = 'day-label__day-name')
          }
          <span className={clsNam}>{days[dayDate.getDay()]}</span>
          <span className="day-label__day-number">{dayDate.getDate()}</span>
        </div>
      ))}
    </header>
  );
};

export default Navigation;

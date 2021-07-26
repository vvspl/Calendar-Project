import { now } from 'moment';
import React from 'react';

import { days } from '../../utils/dateUtils.js';

const Navigation = ({ weekDates }) => {
  let isCurrentDateOnPage = weekDates.some(  // есть ли дата сегодняшнего дня на экране
    dayDate =>
      dayDate.getDate() === new Date().getDate() &&
      dayDate.getMonth() === new Date().getMonth() &&
      dayDate.getYear() === new Date().getYear(),
  );

  let isToday = false;

  return (
    <header className="calendar__header">
      {weekDates.map(dayDate => (
        <div className="calendar__day-label day-label" >
             {
          dayDate.getDate() === new Date().getDate() && isCurrentDateOnPage
            ? isToday = true
            : isToday = false
          }
          <span className={isToday? 'day-label__day-name-now' : 'day-label__day-name'}>{days[dayDate.getDay()]}</span>
          <span className={isToday? "day-label__day-number-now": "day-label__day-number"}>{dayDate.getDate()}</span>
        </div>
      ))}
    </header>
  );
};

export default Navigation;

import React from 'react';
import PropTypes from 'prop-types';
import { days } from '../../utils/dateUtils.js';

const Navigation = ({ weekDates }) => {
  let isCurrentDateOnPage = weekDates.some(  // if is today's date on screen
    dayDate =>                                         // comparing dates on equal as date.month.year for chosing proper day(today)
      dayDate.getDate() === new Date().getDate() &&
      dayDate.getMonth() === new Date().getMonth() &&
      dayDate.getYear() === new Date().getYear(),
  );

  let isToday = false;

  return (
    <header className="calendar__header">
      {weekDates.map(dayDate => (
        <div className="calendar__day-label day-label" key={Math.random()}>
             {
          dayDate.getDate() === new Date().getDate() && isCurrentDateOnPage   // changing style of today's day
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

Navigation.propTypes = {
  weekDates: PropTypes.array.isRequired,
};

export default Navigation;

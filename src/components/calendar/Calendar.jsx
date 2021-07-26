import React, { useState } from 'react';
import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
import events from '../../gateway/events';
import Modal from '../modal/Modal';
import './calendar.scss';

const Calendar = props => {
  let [event, setEvent] = useState(events);

  const { weekDates } = props;
  return (
    <section className="calendar">
      <Navigation weekDates={weekDates} />
      <div className="calendar__body">
        <div className="calendar__week-container">
          <Sidebar />
          <Week weekDates={weekDates} events={event} />
          {props.isOpened ? <Modal closeModal={()=>props.onClose()} /> : <></>}
        </div>
      </div>
    </section>
  );
};

export default Calendar;

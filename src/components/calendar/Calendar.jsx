import React, { useState, useEffect } from 'react';
import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
// import events from '../../gateway/events';
import { fetchEventsList } from '../../gateway/eventsGateway.jsx';
import Modal from '../modal/Modal';
import './calendar.scss';

const Calendar = props => {
  
  let [events, setEvents] = useState([]);

  const showEvents =()=> fetchEventsList().then(response =>
    setEvents(
      response.map(({ dateFrom, dateTo, ...rest }) => ({
        dateFrom: new Date(dateFrom),
        dateTo: new Date(dateTo),
        ...rest,
      })),
    ),
  );

  useEffect(() => {
    showEvents();
  }, []);

 
  const { weekDates } = props;

  return (
    <section className="calendar">
      <Navigation weekDates={weekDates} />
      <div className="calendar__body">
        <div className="calendar__week-container">
          <Sidebar />
          <Week weekDates={weekDates} events={events} />
          {props.isOpened ? <Modal closeModal={() => props.onClose()} showEvents={showEvents} /> : <></>}
        </div>
      </div>
    </section>
  );
};

export default Calendar;

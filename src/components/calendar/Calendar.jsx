import React, { useState, useEffect } from 'react';
import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
// import events from '../../gateway/events';
import { fetchEventsList } from '../../gateway/eventsGateway.jsx';
import Modal from '../modal/Modal';
import PropTypes from 'prop-types';
import './calendar.scss';

const Calendar = props => {
  let [events, setEvents] = useState([]);

  const showEvents = () =>
    fetchEventsList().then(response =>
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
          <Week weekDates={weekDates} events={events} showEvents={showEvents} />
          {props.isOpened ? (
            <Modal closeModal={() => props.onClose()} showEvents={showEvents} />
          ) : (
            <></>
          )}
        </div>
      </div>
    </section>
  );
};

Calendar.propTypes = {
  weekDates: PropTypes.array.isRequired,
  isOpened: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Calendar;

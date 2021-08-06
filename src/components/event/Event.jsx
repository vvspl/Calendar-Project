import React, { useState } from 'react';
import { deleteEvent } from '../../gateway/eventsGateway';
import PropTypes from 'prop-types';
import './event.scss';

const Event = ({ k, height, marginTop, title, time, showEvents }) => {
  const eventStyle = {
    height,
    marginTop,
  };

  let [showDelBtn, setShowDelBtn] = useState(false);

  const showDeletePopup = event => {
    if (event.target.className !== 'delete-event-btn') {
      setShowDelBtn((showDelBtn = !showDelBtn));
    }
  };

    const deleteEvents = () => {
      deleteEvent(k).then(()=>showEvents());
      setShowDelBtn(showDelBtn = false);
    };
  
  return (
    <div style={eventStyle} className="event" onClick={showDeletePopup}>
      <div className="event__title">{title}</div>
      <div className="event__time">{time}</div>
      {showDelBtn && (
        <button className="delete-event-btn" onClick={deleteEvents}>
          Delete
        </button>
      )}
    </div>
  );
};

Event.propTypes = {
  k: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  marginTop: PropTypes.number.isRequired,
  title: PropTypes.string,
  time: PropTypes.string,
  showEvents: PropTypes.func.isRequired,
};

export default Event;

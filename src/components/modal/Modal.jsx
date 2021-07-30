import React from 'react';
import events from '../../gateway/events.js';
import {addEvent} from '../../gateway/eventsGateway.jsx';
import './modal.scss';

const Modal = props => {
  
  const createEvent = event => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target));

addEvent({
  id: events.length + 1,
  title: formData.title,
  description: formData.description,
  dateFrom: new Date(
    new Date(formData.date).getFullYear(),
    new Date(formData.date).getMonth(),
    new Date(formData.date).getDate(),
    formData.startTime.substring(0,2),
    formData.startTime.substring(3,5),
  ),
  dateTo: new Date(
    new Date(formData.date).getFullYear(),
    new Date(formData.date).getMonth(),
    new Date(formData.date).getDate(),
    formData.endTime.substring(0,2),
    formData.endTime.substring(3,5),
  ),
});
    // events.push({
    //   id: events.length + 1,
    //   title: formData.title,
    //   description: formData.description,
    //   dateFrom: new Date(
    //     new Date(formData.date).getFullYear(),
    //     new Date(formData.date).getMonth(),
    //     new Date(formData.date).getDate(),
    //     formData.startTime.substring(0,2),
    //     formData.startTime.substring(3,5),
    //   ),
    //   dateTo: new Date(
    //     new Date(formData.date).getFullYear(),
    //     new Date(formData.date).getMonth(),
    //     new Date(formData.date).getDate(),
    //     formData.endTime.substring(0,2),
    //     formData.endTime.substring(3,5),
    //   ),
    // } );
    props.closeModal();
  };
  return (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button className="create-event__close-btn" onClick={() => props.closeModal()}>
            +
          </button>
          <form className="event-form" onSubmit={createEvent}>
            <input
              type="text"
              required="required"
              name="title"
              placeholder="Title"
              className="event-form__field"
            />
            <div className="event-form__time">
              <input type="date" required="required" name="date" className="event-form__field" />
              <input
                type="time"
                required="required"
                name="startTime"
                className="event-form__field"
                // onChange={handleChange}
              />
              <span>-</span>
              <input type="time" required="required" name="endTime" className="event-form__field" />
            </div>
            <textarea
              name="description"
              placeholder="Description"
              className="event-form__field"
            ></textarea>
            <button type="submit" className="event-form__submit-btn">
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;

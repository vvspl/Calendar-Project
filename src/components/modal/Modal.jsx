import React from 'react';
import { addEvent } from '../../gateway/eventsGateway.jsx';
import PropTypes from 'prop-types';
import './modal.scss';

const Modal = props => {
  const createEvent = event => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target));

    const formDate = new Date(form.Data.date);

    addEvent({
      title: formData.title,
      description: formData.description,
      dateFrom: new Date(
        formDate.getFullYear(),
        formDate.getMonth(),
        formDate.getDate(),
        formData.startTime.substring(0, 2),
        formData.startTime.substring(3, 5),
      ),
      dateTo: new Date(
        formDate.getFullYear(),
        formDate.getMonth(),
        formDate.getDate(),
        formData.endTime.substring(0, 2),
        formData.endTime.substring(3, 5),
      ),
    }).then(() => props.showEvents());
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

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  showEvents: PropTypes.func.isRequired,
};

export default Modal;

import React from "react";
import { ContextExclusionPlugin } from "webpack";

import "./modal.scss";

const Modal =(props)=>{

const handleChange=()=>{

}

const createEvent = event =>{
  event.preventDefault();
// const formData = Object.fromEntries(new FormData(event.target));
console.log('formData: ', event.target );


}
    return (
      <div className="modal overlay">
        <div className="modal__content">
          <div className="create-event">
            <button className="create-event__close-btn" onClick={()=>props.closeModal()}>+</button>
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
                <input
                  type="time"
                  required="required"
                  name="endTime"
                  className="event-form__field"
                />
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
}

export default Modal;

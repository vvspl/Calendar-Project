import React, {useState} from 'react';
import events from '../../gateway/events';
import './event.scss';

const Event = ({k, height, marginTop, title, time, forceRender}) => {
  const eventStyle = {
    height,
    marginTop,
  };

  let [showDelBtn, setShowDelBtn] = useState(false);
 
  const showDeletePopup = event => {
        if (event.target.className!=="delete-event-btn") {
      setShowDelBtn(showDelBtn = !showDelBtn);
    }
  };

  const deleteEvent = () => {
    // let index = events.indexOf(events.filter(el=>el.id===k));
    // console.log('index', index);
    let index = null;
    for (let i=0; i<events.length; i+=1){
      if (events[i].id===k) index=i;
    }
   events.splice(index,1);
    setShowDelBtn(showDelBtn = false);
    forceRender();
  };

  return (
    <div style={eventStyle} className="event" onClick={showDeletePopup}>
      <div className="event__title">{title}</div>
      <div className="event__time">{time}</div>
      {showDelBtn && (
        <button className="delete-event-btn" onClick={deleteEvent}>
          Delete
        </button>
      )}
    </div>
  );
};

export default Event;

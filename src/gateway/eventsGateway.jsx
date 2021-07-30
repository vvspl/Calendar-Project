const baseUrl = 'https://61028e0c79ed68001748217a.mockapi.io/events';

export const fetchEventsList = () => {
    return fetch(baseUrl).then(res => {
      if (res.ok) {
        return res.json();
      }
    }).catch(() => alert("Internal Server Error. Failed to delete event"));
  };

  export const addEvent = eventData => {
    return fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(eventData),
    }).catch(() => alert("Internal Server Error. Failed to delete event"));
  };

  export const deleteEvent = (id) => {
    return fetch(`${baseUrl}/${id}`, {
      method: "DELETE",
    }).catch(() => alert("Internal Server Error. Failed to delete event"));
  };
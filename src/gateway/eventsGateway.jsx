const baseUrl = 'https://61028e0c79ed68001748217a.mockapi.io/events';

export const addEvent = eventData => {
    return fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(eventData),
    }).then(response => {
      if (!response.ok) {
        throw new Error('Failed to create event');
      }
    });
  };

export const fetchEventsList = () => {
    return fetch(baseUrl).then(res => {
      if (res.ok) {
        return res.json();
      }
    });
  };
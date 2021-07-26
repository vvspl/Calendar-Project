import React, { useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import { getWeekStartDate, generateWeekRange, months } from '../src/utils/dateUtils.js';
import './common.scss';

const App = () => {
  let [weekDifference, setWeekDifference] = useState(0);
  let [isModalOpened, setIsModalOpened] = useState(false);

  const nextWeek = () => {
    setWeekDifference((weekDifference -= 1));
  };

  const prevWeek = () => {
    setWeekDifference((weekDifference += 1));
  };

  const backToCurrentDate = () => {
    setWeekDifference((weekDifference = 0));
  };

  const openCloseModal = () => {
    setIsModalOpened((isModalOpened=!isModalOpened));
  };

  const changedStartDate = new Date(new Date() - weekDifference * 7 * 24 * 60 * 60 * 1000); // current Date +- 1 week for changing page

  const currentMonthMonday = months[getWeekStartDate(changedStartDate).getMonth()];
  const sundayDate = new Date(
    getWeekStartDate(changedStartDate).setDate(getWeekStartDate(changedStartDate).getDate() + 6),
  );
  const currentMonthSunday = months[sundayDate.getMonth()];
  let currentMonth = currentMonthMonday; // Show name of Month in the Header
  if (currentMonthMonday !== currentMonthSunday) {
    currentMonth = currentMonthMonday + '-' + currentMonthSunday;
  }
  const weekDates = generateWeekRange(getWeekStartDate(changedStartDate));

  return (
    <>
      <Header
        nextWeek={nextWeek}
        prevWeek={prevWeek}
        backToCurrentDate={backToCurrentDate}
        currentMonth={currentMonth}
        onCreate={openCloseModal}
      />
      <Calendar weekDates={weekDates} isOpened={isModalOpened} onClose={openCloseModal}/>
    </>
  );
};

export default App;

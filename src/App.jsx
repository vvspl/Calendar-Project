import React, { Component } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import { getWeekStartDate, generateWeekRange, months } from '../src/utils/dateUtils.js';
import './common.scss';

class App extends Component {
  state = {
    weekDifference: 0,
    weekStartDate: new Date(),
  };

  nextWeek = () => {
    this.setState({
      weekDifference: this.state.weekDifference - 1,
    });
  };

  prevWeek = () => {
    this.setState({
      weekDifference: this.state.weekDifference + 1,
    });
  };

  backToCurrentDate = () => {
    this.setState({
      weekDifference: 0,
    });
  };

  render() {
    const changedStartDate = new Date(
      this.state.weekStartDate - this.state.weekDifference * 7 * 24 * 60 * 60 * 1000,
    );

    const currentMonthMonday = months[getWeekStartDate(changedStartDate).getMonth()];
    const sundayDate = new Date(
      getWeekStartDate(changedStartDate).setDate(getWeekStartDate(changedStartDate).getDate() + 6),
    );
    const currentMonthSunday = months[sundayDate.getMonth()];
    let currentMonth = currentMonthMonday;  // Выводим в Хедер название месяца
    if (currentMonthMonday !== currentMonthSunday) {
      currentMonth = currentMonthMonday + '-' + currentMonthSunday;
    }
    const weekDates = generateWeekRange(getWeekStartDate(changedStartDate));

    return (
      <>
        <Header
          nextWeek={this.nextWeek}
          prevWeek={this.prevWeek}
          backToCurrentDate={this.backToCurrentDate}
          currentMonth={currentMonth}
        />
        <Calendar weekDates={weekDates} />
      </>
    );
  }
}

export default App;

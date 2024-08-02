import "../styles/calendar/WeeklyCalendar.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import downImage from "../styles/calendar/down-btn.png";
import Day from "./Day";
import React, { useState, useEffect, useRef, useCallback } from "react";

const WeeklyCalendar = ({
  dummy,
  currentDate,
  setCurrentDate,
  getYearMonthDay,
  setClickDay,
  clickDay,
}) => {
  const datePickerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const handleImageClick = () => {
    if (datePickerRef.current) {
      datePickerRef.current.setOpen(true);
    }
  };

  const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const weeks = ["첫째주", "둘째주", "셋째주", "넷째주", "다섯째주"];

  const getWeekOfMonth = (date) => {
    const startWeekDayIndex = new Date(
      date.getFullYear(),
      date.getMonth(),
      1
    ).getDay();
    const offsetDate = date.getDate() + startWeekDayIndex - 1;
    return Math.floor(offsetDate / 7);
  };

  const [selectedWeek, setSelectedWeek] = useState(
    weeks[getWeekOfMonth(currentDate)]
  );

  useEffect(() => {
    setSelectedWeek(weeks[getWeekOfMonth(currentDate)]);
  }, [currentDate]);

  const getStartDateOfSelectedWeek = (year, month, weekIndex) => {
    const firstDayOfMonth = new Date(year, month, 1);
    const startWeekDayIndex = firstDayOfMonth.getDay();
    let startDate = new Date(
      year,
      month,
      1 + weekIndex * 7 - startWeekDayIndex
    );

    if (startDate.getMonth() !== month) {
      startDate = new Date(
        year,
        month,
        startWeekDayIndex + 1 + weekIndex * 7 - startWeekDayIndex
      );
    }

    return startDate;
  };

  const handleWeekChange = (week) => {
    const selectedWeekIndex = weeks.indexOf(week);
    const newStartDate = getStartDateOfSelectedWeek(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      selectedWeekIndex
    );
    setCurrentDate(newStartDate);
    setIsOpen(false);
  };

  const getWeekStartDate = (date) => {
    const dayOfWeek = date.getDay();
    const startDate = new Date(date);
    startDate.setDate(date.getDate() - dayOfWeek);
    return startDate;
  };

  const weekStart = getWeekStartDate(currentDate);
  const weekDays = [];
  for (let i = 0; i < 7; i++) {
    const day = new Date(weekStart);
    day.setDate(weekStart.getDate() + i);
    weekDays.push(day);
  }

  const findEvent = (date) => {
    const event = dummy.find(
      (event) => event.diaryAt === getYearMonthDay(date)
    );
    return event ? event : null;
  };

  return (
    <div className="calendar-content">
      <div className="select-container">
        <div className="picker-container">
          <DatePicker
            selected={currentDate}
            shouldCloseOnSelect={true}
            popperPlacement="bottom"
            onChange={(date) => setCurrentDate(date)}
            dateFormat="MMMM, yyyy"
            showMonthYearPicker
            showPopperArrow={false}
            className="date-picker"
            ref={datePickerRef}
          />
          <img
            src={downImage}
            alt="down"
            className="down-image"
            onClick={handleImageClick}
          />
        </div>
        <div className="week-selector">
          <button
            className="week-selector-button"
            onClick={() => setIsOpen(!isOpen)}
          >
            {selectedWeek}
          </button>
          {isOpen && (
            <ul className="option-list">
              {weeks.map((week) => (
                <li
                  className="option"
                  key={week}
                  onClick={() => handleWeekChange(week)}
                >
                  {week}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="calendar-weeks">
        {day.map((i, index) => {
          return <div key={index}>{i}</div>;
        })}
      </div>

      <div className="calendar-days">
        {weekDays.map((day, index) => (
          <div key={index} className="calendar-day">
            <Day
              id={getYearMonthDay(day)}
              type="weekly"
              day={day}
              event={findEvent(day)}
              setCurrentDate={setCurrentDate}
              currentDate={currentDate}
              getYearMonthDay={getYearMonthDay}
              setClickDay={setClickDay}
              clickDay={clickDay}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyCalendar;

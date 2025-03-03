import React, { useState } from "react";
import { Modal, Typography } from "@mui/material";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import CalendarIcon from "../../assets/svgs/calendar_month.svg?react";

const DateRangePicker = () => {
  const defaultStartDate = new Date();
  const defaultEndDate = new Date();
  defaultEndDate.setDate(defaultEndDate.getDate() + 1);

  const [startDate, setStartDate] = useState<Date | null>(defaultStartDate);
  const [endDate, setEndDate] = useState<Date | null>(defaultEndDate);
  const [isStartSelecting, setIsStartSelecting] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleDateSelect = (date: Date) => {
    if (isStartSelecting) {
      setStartDate(date);
      setIsStartSelecting(false);
    } else {
      setEndDate(date);
      setModalIsOpen(false);
    }
  };

  return (
    <div className="flex space-x-6 items-center">
      <Typography className="!mr-3">Start</Typography>
      <button
        onClick={() => {
          setModalIsOpen(true);
          setIsStartSelecting(true);
        }}
        className="flex items-center space-x-2 bg-gray-200 px-3 py-2 rounded-md"
      >
        <CalendarIcon className="text-lg" />
        <span>
          {startDate?.toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "long",
            year: "2-digit",
          })}
        </span>
      </button>

      <Typography className="!mr-3">End</Typography>
      <button
        onClick={() => {
          setModalIsOpen(true);
          setIsStartSelecting(false);
        }}
        className="flex items-center space-x-2 bg-gray-200 px-3 py-2 rounded-md"
      >
        <CalendarIcon className="text-lg" />
        <span>
          {endDate?.toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "long",
            year: "2-digit",
          })}
        </span>
      </button>

      <Modal
        open={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        className="bg-black p-4 rounded-lg shadow-lg w-[300px] !h-[460px] mx-auto mt-10"
      >
        <div>
          <h3 className="text-lg text-white font-semibold mb-2">
            {isStartSelecting ? "Select Start Date" : "Select End Date"}
          </h3>
          <Calendar
            onChange={(date) => handleDateSelect(date as Date)}
            value={isStartSelecting ? startDate : endDate}
          />
          <button
            className="mt-4 bg-red-500 text-white px-3 py-2 rounded-md"
            onClick={() => setModalIsOpen(false)}
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default DateRangePicker;

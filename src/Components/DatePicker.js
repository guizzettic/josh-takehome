import { useState, useEffect } from 'react';
import DateMomentUtils from '@date-io/moment';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const DatePick = ({ date, setSearchDate }) => {
  const handleDateChange = (newDate) => {
    setSearchDate(newDate.toLocaleDateString());
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker value={date} onChange={handleDateChange} />
      <CalendarMonthIcon />
    </MuiPickersUtilsProvider>
  );
};

export default DatePick;

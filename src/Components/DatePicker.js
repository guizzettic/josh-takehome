import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const DatePick = ({ date, setSearchDate }) => {
  const handleDateChange = (newDate) => {
    setSearchDate(newDate.toLocaleDateString());
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        style={{ width: 150, paddingLeft: 30 }}
        value={date}
        onChange={handleDateChange}
        format="MM/dd/yyyy"
      />
    </MuiPickersUtilsProvider>
  );
};

export default DatePick;

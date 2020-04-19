import React, { useState } from "react";
import DatePicker from "react-native-datepicker";
import moment from "moment";

const AppDatePicker = (props) => {
  const [date, setDate] = useState(props.initialDate || moment(now));

  return (
    <DatePicker
      style={{ width: 200 }}
      date={date}
      mode="date"
      placeholder="select date"
      format="YYYY-MM-DD"
      minDate="2016-05-01"
      maxDate="2016-06-01"
      confirmBtnText="Confirm"
      cancelBtnText="Cancel"
      showIcon={false}
      customStyles={{
        dateInput: {
          marginLeft: 0,
          paddingHorizontal: 0,
          padding: 0,
        },
        dateTouchBody: {
          padding: 0,
        },
        // ... You can check the source to find the other keys.
      }}
      onDateChange={(date) => {
        setDate(date);
      }}
    />
  );
};

export default AppDatePicker;

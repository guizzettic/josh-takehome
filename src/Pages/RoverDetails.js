import { Route, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import DatePicker from '../Components/DatePicker';

// const setDate = (date = new Date()) => {
//   let currDate = date.toLocaleDateString();
//   return currDate;
// };

const RoverDetails = () => {
  const { name } = useParams();

  const [searchDate, setSearchDate] = useState(new Date().toLocaleDateString());
  const [changeDate, setChangeDate] = useState(null);
  const [roverImages, setRoverImages] = useState(null);
  const [value, setValue] = useState(null);

  const fetchImages = () => {
    let newSearchDate = searchDate.split('/').reverse().join('-');
    [newSearchDate[1], newSearchDate[2]] = [newSearchDate[2], newSearchDate[1]];

    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${name}/photos?earth_date=${newSearchDate}&api_key=myVdUkv9z8xAeDgHj0CNCxTfO1BzYYMV8bMNklQc`;

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Request failed with status ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data.photos);
        setRoverImages(data.photos);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div style={{ padding: 15 }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h1 style={{ paddingRight: 30 }}>
          {name} : {searchDate}
        </h1>
        <DatePicker date={searchDate} setSearchDate={setSearchDate} />
      </div>

      <button onClick={fetchImages}>fetch images</button>
    </div>
  );
};
export default RoverDetails;

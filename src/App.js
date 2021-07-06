import './custom.scss';
import './App.css';
import SearchControls from './components/SearchControls';
import Map from './components/Map';
import { useState } from 'react';

function App() {
  const getMap = function (coords, locName) {
    return <Map coords={coords} locName={locName} />
  };
  const [mapPoint, setMapPoint] = useState(getMap([51.505, -0.09], 'City of London'));
  const changeMapPoint = function (coords, locName) {
    setMapPoint(getMap(coords, locName));
  };

  return (
    <div id="main">
      <header>Welcome to GeoLoc!</header>
      <p>Search by...</p>
      <SearchControls changeMapPoint={changeMapPoint} />
      {mapPoint}
    </div>
  );
}

export default App;

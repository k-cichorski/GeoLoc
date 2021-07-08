import './custom.scss';
import './App.css';
import SearchControls from './components/SearchControls';
import Map from './components/Map';
import { useSelector } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import pin from '../public/images/pin.svg';

function App() {
  const { searching } = useSelector(state => state.appState);

  return (
    <div id="main">
      <header>Welcome to <img src={pin} /> GeoLoc!</header>

      <div className="spinner-container">
        {
          searching ?
            <Spinner animation="border" variant="warning" />
            :
            <p>Search by...</p>
        }
      </div>

      <SearchControls />

      <div className="map-container">
        <Map />
      </div>
    </div>
  );
}

export default App;

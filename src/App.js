import './custom.scss';
import './App.css';
import SearchControls from './components/SearchControls';
import Map from './components/Map';
import { useStateValue } from './store/StateProvider';
import { Spinner } from 'react-bootstrap';

function App() {
  const [state, ] = useStateValue();
  const { searching } = state;

  return (
    <div id="main">
      <header>Welcome to GeoLoc!</header>

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
        <Map {...state} />
      </div>
    </div>
  );
}

export default App;

import './custom.scss';
import './App.css';
import SearchControls from './components/SearchControls';
import Map from './components/Map';

function App() {
  return (
    <div id="main">
      <header>Welcome to GeoLoc!</header>
      <p>Search by...</p>
      <SearchControls />
      <Map />
    </div>
  );
}

export default App;

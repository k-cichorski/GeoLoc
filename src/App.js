import './custom.scss';
import './App.css';
import SearchControls from './components/SearchControls';
import Map from './components/Map';
import { useStateValue } from './store/StateProvider';

function App() {
  const [state, ] = useStateValue();

  return (
    <div id="main">
      <header>Welcome to GeoLoc!</header>
      <p>Search by...</p>
      <SearchControls />
      <Map {...state} />
    </div>
  );
}

export default App;

import './custom.scss';
import './App.css';
import SearchControls from './components/SearchControls';

function App() {
  return (
    <div id="main">
      <header>Welcome to GeoLoc!</header>
      <p>Search by...</p>
      <SearchControls />
    </div>
  );
}

export default App;

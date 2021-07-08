import { Tabs, Tab } from 'react-bootstrap';
import AddressForm from './AddressForm';
import CoordinatesForm from './CoordinatesForm';
import FindMe from './FindMe';
import './SearchControls.css';
import { useDispatch } from 'react-redux';
import { toggleFindUser } from '../redux/slices/locationSlice';

function SearchControls() {
  const dispatch = useDispatch();

  const onSelectFindMe = function (eventKey) {
    if (eventKey == 'findMe') {
      dispatch(toggleFindUser());
    }
  };

  return (
    <Tabs defaultActiveKey="address" onSelect={onSelectFindMe}>
      <Tab eventKey="address" title="Address">
        <AddressForm />
      </Tab>

      <Tab eventKey="coord" title="Coordinates">
        <CoordinatesForm />
      </Tab>

      <Tab eventKey="findMe" title="My Location">
        <FindMe />
      </Tab>
    </Tabs>
  )
}

export default SearchControls;
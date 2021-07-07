import { Tabs, Tab } from 'react-bootstrap';
import AddressForm from './AddressForm';
import CoordinatesForm from './CoordinatesForm';
import './SearchControls.css';

function SearchControls() {
  return (
    <Tabs defaultActiveKey="address">
      <Tab eventKey="address" title="Address">
        <AddressForm />
      </Tab>

      <Tab eventKey="coord" title="Coordinates">
        <CoordinatesForm />
      </Tab>
    </Tabs>
  )
}

export default SearchControls;
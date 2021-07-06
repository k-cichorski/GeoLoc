import { Tabs, Tab } from 'react-bootstrap';
import AddressForm from './AddressForm';
import './SearchControls.css';

function SearchControls() {
  return (
    <Tabs defaultActiveKey="address">
      <Tab eventKey="address" title="Address">
        <AddressForm />
      </Tab>

      <Tab eventKey="coord" title="Coordinates">
        <p>coord form</p>
      </Tab>
    </Tabs>
  )
}

export default SearchControls;
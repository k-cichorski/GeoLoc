import Geosuggest from 'react-geosuggest';
import { ListGroup } from 'react-bootstrap';
import './AddressForm.css';
import { getGeoJson } from '../api/getGeoJson';

const GeoSuggestConfig = {
  suggestsClassName: 'list-group',
  inputClassName: 'form-control',
  placeholder: 'Search places...',
  autoComplete: 'off'
};

const renderSuggestItem = function (suggestion) {
  return (
    <ListGroup.Item action variant="light">
      {suggestion.label}
    </ListGroup.Item>
  )
};

const onSuggestSelect = function (suggest) {
  getGeoJson(suggest.location);
};

function AddressForm() {
  return (
    <div className="addressForm">
      <Geosuggest {...GeoSuggestConfig} renderSuggestItem={renderSuggestItem} onSuggestSelect={onSuggestSelect} />
    </div>
  )
}

export default AddressForm;
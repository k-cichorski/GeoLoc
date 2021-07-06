import Geosuggest from 'react-geosuggest';
import { ListGroup } from 'react-bootstrap';
import './AddressForm.css';
import getLocation from '../api/getLocation';
import { useStateValue } from '../store/StateProvider';
import { NEW_LOCATION } from '../store/reducer';

const GeoSuggestConfig = {
  suggestsClassName: 'list-group',
  inputClassName: 'form-control',
  placeholder: 'Search places...',
  autoComplete: 'off'
};

function AddressForm() {
  const [, dispatch] = useStateValue();
  const renderSuggestItem = function (suggestion) {
    return (
      <ListGroup.Item action variant="light">
        {suggestion.label}
      </ListGroup.Item>
    )
  };

  const onSuggestSelect = async function (suggestion) {
    let location = await getLocation(suggestion);
    dispatch({
      type: NEW_LOCATION,
      payload: location
    });
  };

  return (
    <div className="addressForm">
      <Geosuggest {...GeoSuggestConfig} renderSuggestItem={renderSuggestItem} onSuggestSelect={onSuggestSelect} />
    </div>
  )
}

export default AddressForm;
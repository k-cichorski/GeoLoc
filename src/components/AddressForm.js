import Geosuggest from 'react-geosuggest';
import { ListGroup } from 'react-bootstrap';
import './AddressForm.css';
import getLocation from '../api/getLocation';
import { useStateValue } from '../store/StateProvider';
import { NEW_LOCATION, action } from '../store/reducer';
import { useRef, useEffect } from 'react';

const GeoSuggestConfig = {
  suggestsClassName: 'list-group',
  inputClassName: 'form-control',
  placeholder: 'Search places...',
  autoComplete: 'off'
};

function AddressForm() {
  const [{ locName }, dispatch] = useStateValue();
  const geoSuggest = useRef(null);
  const renderSuggestItem = function (suggestion) {
    return (
      <ListGroup.Item action variant="light">
        {suggestion.label}
      </ListGroup.Item>
    )
  };

  useEffect(() => {
    geoSuggest.current.update(locName);
  }, [locName]);

  const onSuggestSelect = async function (suggestion) {
    if (!suggestion) {
      return
    }
    const location = await getLocation(suggestion, dispatch);
    location && dispatch(
      action(NEW_LOCATION, location)
    );
  };

  return (
    <div className="addressForm">
      <Geosuggest {...GeoSuggestConfig} renderSuggestItem={renderSuggestItem}
        onSuggestSelect={onSuggestSelect} initialValue={locName} ref={geoSuggest} />
    </div>
  )
}

export default AddressForm;
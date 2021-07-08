import Geosuggest from 'react-geosuggest';
import { ListGroup } from 'react-bootstrap';
import './AddressForm.css';
import getLocation from '../api/getLocation';
import { useRef, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

const GeoSuggestConfig = {
  suggestsClassName: 'list-group',
  inputClassName: 'form-control',
  placeholder: 'Search places...',
  autoComplete: 'off'
};

function AddressForm() {
  const locName = useSelector(state => state.location.locName);
  const dispatch = useDispatch();
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
    dispatch(getLocation(suggestion));
  };

  return (
    <div className="addressForm">
      <Geosuggest {...GeoSuggestConfig} renderSuggestItem={renderSuggestItem}
        onSuggestSelect={onSuggestSelect} initialValue={locName} ref={geoSuggest} />
    </div>
  )
}

export default AddressForm;
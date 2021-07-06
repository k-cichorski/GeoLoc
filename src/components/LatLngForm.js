import { Form, Button, InputGroup } from 'react-bootstrap';
import './LatLngForm.css';
import getLocation from '../api/getLocation';
import { useStateValue } from '../store/StateProvider';
import { NEW_LOCATION } from '../store/reducer';
import { useState } from 'react';

function LatLngForm() {
  const [{ coords }, dispatch] = useStateValue();
  const [lat, setLat] = useState(coords.lat);
  const [lng, setLng] = useState(coords.lng);
  const regex = /(\d)*\.(\d)*$/i;

  const onSubmit = async function (e) {
    e.preventDefault();
    const [latInput, lngInput] = [e.target[0], e.target[1]];
    if (!regex.test(latInput.value) || !regex.test(lngInput.value)) {
      return
    };
    const location = {
      lat: latInput.value,
      lng: lngInput.value
    };
    let processedLocation = await getLocation({
      location
    });
    dispatch({
      type: NEW_LOCATION,
      payload: processedLocation
    });
  };

  const onChangeLat = function (e) {
    setLat(e.target.value);
  };

  const onChangeLng = function (e) {
    setLng(e.target.value);
  };

  return (
    <div className="latLngForm">
      <Form noValidate onSubmit={onSubmit} className="latLngFormGroup">
        <InputGroup hasValidation>
          <InputGroup.Prepend>
            <InputGroup.Text>Lat:</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            required
            type="number"
            step="any"
            defaultValue={coords.lat}
            placeholder={coords.lat}
            isValid={regex.test(lat)}
            isInvalid={!regex.test(lat)}
            onChange={onChangeLat} />
          <Form.Control.Feedback type="invalid" tooltip>
            Latitude has to be a floating point value!
          </Form.Control.Feedback>
        </InputGroup>

        <InputGroup hasValidation>
          <InputGroup.Prepend>
            <InputGroup.Text>Lng:</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            required 
            type="number"
            step="any"
            defaultValue={coords.lng}
            placeholder={coords.lng}
            isValid={regex.test(lng)}
            isInvalid={!regex.test(lng)}
            onChange={onChangeLng} />
          <Form.Control.Feedback type="invalid" tooltip>
            Longitude has to be a floating point value!
          </Form.Control.Feedback>
          <Button variant="light" type="submit">
            Go!
          </Button>
        </InputGroup>
      </Form>
    </div>
  )
}

export default LatLngForm;
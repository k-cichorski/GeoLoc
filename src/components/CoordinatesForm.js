import { Form, Button, InputGroup } from 'react-bootstrap';
import './CoordinatesForm.css';
import getLocation from '../api/getLocation';
import { useStateValue } from '../store/StateProvider';
import { NEW_LOCATION, NEW_LAT, NEW_LNG, action } from '../store/reducer';

function CoordinatesForm() {
  const [{ userCoords }, dispatch] = useStateValue();
  const regex = /(\d)*\.(\d)*$/i;

  const onSubmit = async function (e) {
    e.preventDefault();
    const [latInput, lngInput] = [e.target[0], e.target[1]];
    if (!regex.test(latInput.value) || !regex.test(lngInput.value)) {
      return
    }
    const location = {
      lat: latInput.value,
      lng: lngInput.value,
    };
    const processedLocation = await getLocation({
      location,
      label: `Lat: ${latInput.value}, Lng: ${lngInput.value}`
    });
    processedLocation && dispatch(
      action(NEW_LOCATION, processedLocation)
    );
  };

  const onChangeLat = function (e) {
    dispatch(
      action(NEW_LAT, e.target.value)
    );
  };

  const onChangeLng = function (e) {
    dispatch(
      action(NEW_LNG, e.target.value)
    );
  };

  return (
    <div className="coordinatesForm">
      <Form noValidate onSubmit={onSubmit} className="coordinatesFormGroup">
        <InputGroup hasValidation>
          <InputGroup.Prepend>
            <InputGroup.Text>Lat:</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            required
            type="number"
            step="any"
            value={userCoords.lat}
            placeholder={`e.g. ${userCoords.lat}`}
            isValid={regex.test(userCoords.lat)}
            isInvalid={!regex.test(userCoords.lat)}
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
            value={userCoords.lng}
            placeholder={`e.g. ${userCoords.lng}`}
            isValid={regex.test(userCoords.lng)}
            isInvalid={!regex.test(userCoords.lng)}
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

export default CoordinatesForm;
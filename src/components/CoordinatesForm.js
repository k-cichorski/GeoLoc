import { Form, Button, InputGroup } from 'react-bootstrap';
import './CoordinatesForm.css';
import getLocation from '../api/getLocation';
import searchIcon from '../../public/images/search.svg';
import { useSelector, useDispatch } from 'react-redux';
import { newLat, newLng } from '../redux/slices/locationSlice';

function CoordinatesForm() {
  const userCoords = useSelector(state => state.location.userCoords);
  const coords = useSelector(state => state.location.coords);
  const dispatch = useDispatch();
  const regex = /^-?(\d)+\.(\d)+$/i;

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
    dispatch(
      getLocation({
        location,
        label: ''
      })
    );
  };

  const onChangeLat = function (e) {
    dispatch(
      newLat(e.target.value)
    );
  };

  const onChangeLng = function (e) {
    dispatch(
      newLng(e.target.value)
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
            placeholder={`e.g. ${coords.lat}`}
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
            placeholder={`e.g. ${coords.lng}`}
            isValid={regex.test(userCoords.lng)}
            isInvalid={!regex.test(userCoords.lng)}
            onChange={onChangeLng} />
          <Form.Control.Feedback type="invalid" tooltip>
            Longitude has to be a floating point value!
          </Form.Control.Feedback>
          <Button variant="light" type="submit">
            <img src={searchIcon} />
          </Button>
        </InputGroup>
      </Form>
    </div>
  )
}

export default CoordinatesForm;
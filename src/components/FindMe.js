import { Form, InputGroup } from 'react-bootstrap';
import './CoordinatesForm.css';
import { useSelector } from 'react-redux';

function FindMe() {
  const coords = useSelector(state => state.location.coords);

  return (
    <div className="coordinatesForm">
      <Form noValidate className="coordinatesFormGroup">
        <InputGroup hasValidation>
          <InputGroup.Prepend>
            <InputGroup.Text>Lat:</InputGroup.Text>
          </InputGroup.Prepend>

          <Form.Control
            disabled
            required
            type="number"
            value={coords.lat} />
        </InputGroup>

        <InputGroup hasValidation>
          <InputGroup.Prepend>
            <InputGroup.Text>Lng:</InputGroup.Text>
          </InputGroup.Prepend>

          <Form.Control
            disabled
            required
            type="number"
            step="any"
            value={coords.lng} />
        </InputGroup>
      </Form>
    </div>
  )
}

export default FindMe;
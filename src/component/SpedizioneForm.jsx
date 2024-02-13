import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export function SpedizioneForm() {
  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" id='email'/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" id='password'/>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>indirizzo  di consegna</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>citta'</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>stato</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>Italia</option>
            <option>Francia</option>
            <option>Spagna</option>
            <option>UK</option>
            <option>Germania</option>
            <option>Portogallo</option>
            <option>Belgio</option>
            <option>Paesi Bassi</option>
            <option>Svizzera</option>
          </Form.Select>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}


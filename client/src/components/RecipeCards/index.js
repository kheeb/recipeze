//Recipe Cards
import { Card, Button, Form } from 'react-bootstrap';

export default function recipeCard({ recipeName, photoLink, altDesc, loggedIn, recipeSaved }) {
  return (
    <Card>
      <Card.Title>{recipeName}</Card.Title>
      <Card.Img src={photoLink} alt={altDesc} />
      <Card.Body>
        <Button href={(!recipeSaved) ? 'HREF for saving to user' : 'HREF for updating existing saved recipe'} className={(!loggedIn) ? 'invisible' : 'visible'}>Save</Button>
      </Card.Body>
      {/* // TODO: Add bootstrap styling or custom styling into ternary to show button if saved to user profile */}
      <Form.Select className={(!loggedIn) ? 'invisible' : 'visible'}>
        <option>Day of the week</option>
        <option value={'Sunday'}>Sunday</option>
        <option value={'Monday'}>Monday</option>
        <option value={'Tuesday'}>Tuesday</option>
        <option value={'Wednesday'}>Wednesday</option>
        <option value={'Thursday'}>Thursday</option>
        <option value={'Friday'}>Friday</option>
        <option value={'Saturday'}>Saturday</option>
      </Form.Select>
    </Card>
  )
}

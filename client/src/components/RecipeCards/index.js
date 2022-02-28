//Recipe Cards
import { Card, Button, Form } from 'react-bootstrap';

// TODO: Replace desconstructed recipe keys with working keys and also replace connected keys in return section
export default function recipeCard({ recipeName, photo, altDesc }) {
  return (
    <Card>
      <Card.Title>{recipeName}</Card.Title>
      <Card.Img src={photo} alt={altDesc} />
      <Card.Body>
        {/* // TODO: Change href ternary with variable that shows if the recipe is already saved to the user */}
        <Button href={('Variable for if saved to user') ? "HREF for saving to user's schedule" : 'HREF for saving to user'}>Save</Button>
      </Card.Body>
      {/* // TODO: Add bootstrap styling or custom styling into ternary to show button if saved to user profile */}
      <Form.Select style={('Variable for is saved to user') ? 'display: whichever display style we chose;' : 'display: hidden;'}>
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

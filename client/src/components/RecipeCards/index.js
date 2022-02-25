import { Card, Button } from 'react-bootstrap';

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
    </Card>
  )
}

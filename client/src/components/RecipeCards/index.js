import { Card, Button } from 'react-bootstrap';

// TODO: Replace desconstructed recipe keys with working keys and also replace connected keys in return section
export default function recipeCard({ recipeName, photo, altDesc }) {
  return (
    <Card>
      <Card.Title>{recipeName}</Card.Title>
      <Card.Img src={photo} alt={altDesc} />
      <Card.Body>

      </Card.Body>
    </Card>
  )
}

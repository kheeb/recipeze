//Recipe Cards
import { Card, Button } from 'react-bootstrap';

export default function savedRecipeCard({ recipeId, recipeName, recipeLink, photoLink, handleDelete }) {
  return (
    <Card data-recipeid={recipeId}>
      <Card.Title>{recipeName}</Card.Title>
      <Card.Img src={photoLink} alt={`${recipeName} photo`} />
      <Card.Body>
        <Button onClick={() => { handleDelete(recipeId) }}>Delete</Button>
        <Button href={recipeLink} target='_blank'>Recipe Link</Button>
      </Card.Body>
    </Card>
  )
}

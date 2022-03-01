//Recipe Cards
import { Card, Button} from 'react-bootstrap';

export default function recipeCard({ recipeId, recipeName, recipeLink, photoLink, loggedIn, recipeSaved, handleSave }) {

  return (
    <Card data-recipeid={recipeId}>
      <Card.Title>{recipeName}</Card.Title>
      <Card.Img src={photoLink} alt={`${recipeName} photo`}/>
      <Card.Body>
        <Button 
        onClick={()=>{handleSave(recipeId,recipeName,photoLink,recipeLink )}}
        // href={(!recipeSaved) ? 'HREF for saving to user' : 'HREF for updating existing saved recipe'}
         className={(!loggedIn) ? 'invisible' : 'visible'}>Save</Button>
        <Button href={recipeLink} target='_blank'>Recipe Link</Button>
      </Card.Body>
    </Card>
  )
}

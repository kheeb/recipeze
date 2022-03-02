//Recipe Cards
import { Card, Button } from 'react-bootstrap';

export default function recipeCard({ recipeId, recipeName, recipeLink, photoLink, loggedIn, recipeSaved, handleSave }) {

  return (
    <>
  <style type="text/css">
    {`
    .btn-flat {
      background-color: #598787;
      
    }

    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
      border-radius: 50px;
      color: #f1d261;
      border-color: #f1d261; 
      border-width: 5px;
    }
    `}
  </style>
<div class="mt-3 text-center">
    <Card data-recipeid={recipeId} style={{width: '25rem'}} className="shadow">
      <Card.Img varient="top" src={photoLink} alt={`${recipeName} photo`} />
      <Card.Title >{recipeName}</Card.Title>
      <hr className="hr-custom"></hr>
      <Card.Body>
        <Button
          onClick={() => { handleSave(recipeId, recipeName, photoLink, recipeLink) }}
          className={(!loggedIn) ? 'invisible' : 'visible'} className="flat" size="xxl" class="">Save</Button>
        <Button href={recipeLink} target='_blank' className="flat" size="xxl" class="">Link</Button>
      </Card.Body>
    </Card>
    </div>
    </>
    
  )
}

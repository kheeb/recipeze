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

    .card-title {
      font-family: 'Catamaran', sans-serif;
      padding: 1.2rem;
      font-weight: bold;
      letter-spacing: 0.6rem;
      font-size: 1.2rem;
      border-top: 3px solid #f1d261;
      border-bottom: 3px solid #f1d261;
      border-width: 10px;
    }

    

    .card-body-custom {
      background: linear-gradient(to bottom, #95a687, #cee4ce)
      
    }

    .card-footer {
      background-color: #f1d261;
    }
    `}
  </style>
<div className="mt-3 col d-flex justify-content-center text-center">
    <Card data-recipeid={recipeId} style={{width: '30rem'}} className="shadow card-body-custom border-dark border-2">
      <Card.Img varient="top" src={photoLink} alt={`${recipeName} photo`} />
      
      <Card.Title className="card-title">{recipeName}</Card.Title>
      
      <Card.Body className="">
        <Button
          onClick={() => { handleSave(recipeId, recipeName, photoLink, recipeLink) }}
          className={(!loggedIn) ? 'd-none' : 'flat'} >Save</Button>
        <Button href={recipeLink} target='_blank' className="flat" size="xxl" >Link</Button>
      </Card.Body>
      <Card.Footer className="mt-2 card-footer"></Card.Footer>
    </Card>
    </div>

    </>
    
  )
}

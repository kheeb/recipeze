//Recipe Cards
import { Card, Button } from 'react-bootstrap';

export default function savedRecipeCard({ recipeId, recipeName, recipeLink, photoLink, handleDelete }) {
  return (
    <>
    <style type="text/css">
    {`

    body {
      background: radial-gradient(#334e43, #cee4ce); 
    }
    
    .btn-flat {
      background-color: #598787;
      
    }

    .btn-xxl {
      padding: 1rem 1.3rem;
      font-size: 1.5rem;
      border-radius: 50px;
      color: #f1d261;
      border-color: #f1d261; 
      border-width: 3px;
      font-family: 'Caveat', cursive;
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
    <Card data-recipeid={recipeId} style={{width: '32rem'}} className="shadow card-body-custom border-dark border-2">
      <Card.Img src={photoLink} alt={`${recipeName} photo`} />
      <Card.Title className="card-title">{recipeName}</Card.Title>
      <Card.Body>
        <Button onClick={() => { handleDelete(recipeId) }} className="flat" size="xxl">Delete</Button>
        <Button href={recipeLink} target='_blank' className="flat" size="xxl"> Link</Button>
      </Card.Body>
    </Card>
    </div>
    </>
  )
}

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

export const ProductCard = ({id,title,text,imgSrc}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${id}`); 
  };

  return (
    <div className='cardWrapper'>
    <Card className='card'>
      <Card.Img variant="top" src={imgSrc} alt={title} />
      <Card.Body className='cardBody'>
        <Card.Title>{title}</Card.Title>
        <div className='cardContent'>
        <Card.Text> {text} </Card.Text>
        <Button className="cardButton" variant="primary" onClick={handleClick}>Buy Or Rent</Button>
        </div>
      </Card.Body>
    </Card>
    </div>
  );
}

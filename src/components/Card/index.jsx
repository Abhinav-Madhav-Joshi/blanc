import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Bruh = ({title,text,imgSrc}) => {
  return (
    <div className='width'>
    <Card className='card'>
      <Card.Img variant="top" src={imgSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        <Button className="button" variant="primary">Buy or Rent</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

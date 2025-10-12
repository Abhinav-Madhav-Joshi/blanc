import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { products } from '../Home'; 

export const MyCarousel = () => {
    if (window.innerWidth >= 768){
        return (
            <Carousel  style={{backgroundColor:"grey", paddingTop:"0.4em", paddingBottom:"0.4em", borderTop:"1px solid black"}}>
                <Carousel.Item>
                    <div style={{paddingLeft:"1em"}}>
                        <Row className="g-3">
                            <Col md={2}>
                                <img className=" CImage" src={products[0].imgSrc} alt="Formal Coat" />
                            </Col>
                            <Col md={2}>
                                <img className=" CImage" src={products[4].imgSrc} alt="Colourful Dress" />
                            </Col>
                            <Col md={2}>
                                <img className=" CImage" src={products[8].imgSrc} alt="Decent Dress" />
                            </Col>
                            <Col md={2}>
                                <img className=" CImage" src={products[12].imgSrc} alt="Decent Dress" />
                            </Col>
                            <Col md={2}>
                                <img className=" CImage" src={products[16].imgSrc} alt="Decent Dress" />
                            </Col>
                            <Col md={2}>
                                <img className=" CImage" src={products[3].imgSrc} alt="Decent Dress" />
                            </Col>
                        </Row>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{paddingLeft:"1em"}}>
                        <Row className="g-3">
                            <Col md={2}>
                                <img className=" CImage" src={products[7].imgSrc} alt="Formal Coat" />
                            </Col>
                            <Col md={2}>
                                <img className=" CImage" src={products[11].imgSrc} alt="Colourful Dress" />
                            </Col>
                            <Col md={2}>
                                <img className=" CImage" src={products[15].imgSrc} alt="Decent Dress" />
                            </Col>
                            <Col md={2}>
                                <img className=" CImage" src={products[2].imgSrc} alt="Decent Dress" />
                            </Col>
                            <Col md={2}>
                                <img className=" CImage" src={products[6].imgSrc} alt="Decent Dress" />
                            </Col>
                            <Col md={2}>
                                <img className=" CImage" src={products[10].imgSrc} alt="Decent Dress" />
                            </Col>
                        </Row>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{paddingLeft:"1em"}}>
                        <Row className="g-3">
                            <Col md={2}>
                                <img className=" CImage" src={products[14].imgSrc} alt="Formal Coat" />
                            </Col>
                            <Col md={2}>
                                <img className=" CImage" src={products[1].imgSrc} alt="Colourful Dress" />
                            </Col>
                            <Col md={2}>
                                <img className=" CImage" src={products[5].imgSrc} alt="Decent Dress" />
                            </Col>
                            <Col md={2}>
                                <img className=" CImage" src={products[9].imgSrc} alt="Decent Dress" />
                            </Col>
                            <Col md={2}>
                                <img className=" CImage" src={products[13].imgSrc} alt="Decent Dress" />
                            </Col>
                            <Col md={2}>
                                <img className=" CImage" src={products[0].imgSrc} alt="Decent Dress" />
                            </Col>
                        </Row>
                    </div>
                </Carousel.Item>
            </Carousel>
        );
    }
    else{
        return (
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100" src={products[0].imgSrc} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={products[1].imgSrc} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={products[2].imgSrc} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={products[3].imgSrc} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={products[4].imgSrc} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={products[5].imgSrc} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={products[6].imgSrc} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={products[7].imgSrc} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={products[8].imgSrc} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={products[9].imgSrc} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={products[10].imgSrc} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={products[11].imgSrc} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={products[12].imgSrc} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={products[13].imgSrc} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={products[14].imgSrc} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={products[15].imgSrc} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={products[16].imgSrc} alt="First slide" />
            </Carousel.Item>
    </Carousel>
  );
    }
}
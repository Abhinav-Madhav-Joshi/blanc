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
                                <img className=" CImage" src={products[0].imgSrc} alt={products[0].title} />
                            </Col>
                            <Col md={2}>
                                <img className=" CImage" src={products[4].imgSrc} alt={products[4].title} />
                            </Col>
                            <Col md={2}>
                                <img className=" CImage" src={products[8].imgSrc} alt={products[8].title} />
                            </Col>
                            <Col md={2}>
                                <img className=" CImage" src={products[12].imgSrc} alt={products[12].title} />
                            </Col>
                            <Col md={2}>
                                <img className=" CImage" src={products[16].imgSrc} alt={products[16].title} />
                            </Col>
                            <Col md={2}>
                                <img className=" CImage" src={products[3].imgSrc} alt={products[3].title} />
                            </Col>
                        </Row>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{paddingLeft:"1em"}}>
                        <Row className="g-3">
                            <Col md={2}>
                                <img className=" CImage" src={products[7].imgSrc} alt={products[7].title} />
                            </Col>
                            <Col md={2}>
                                <img className=" CImage" src={products[11].imgSrc} alt={products[11].title} />
                            </Col>
                            <Col md={2}>
                                <img className=" CImage" src={products[15].imgSrc} alt={products[15].title} />
                            </Col>
                            <Col md={2}>
                                <img className=" CImage" src={products[2].imgSrc} alt={products[2].title} />
                            </Col>
                            <Col md={2}>
                                <img className=" CImage" src={products[6].imgSrc} alt={products[6].title} />
                            </Col>
                            <Col md={2}>
                                <img className=" CImage" src={products[10].imgSrc} alt={products[10].title} />
                            </Col>
                        </Row>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{paddingLeft:"1em"}}>
                        <Row className="g-3">
                            <Col md={2}>
                                <img className=" CImage" src={products[14].imgSrc} alt={products[14].title} />
                            </Col>
                            <Col md={2}>
                                <img className=" CImage" src={products[1].imgSrc} alt={products[1].title} />
                            </Col>
                            <Col md={2}>
                                <img className=" CImage" src={products[5].imgSrc} alt={products[5].title} />
                            </Col>
                            <Col md={2}>
                                <img className=" CImage" src={products[9].imgSrc} alt={products[9].title} />
                            </Col>
                            <Col md={2}>
                                <img className=" CImage" src={products[13].imgSrc} alt={products[13].title} />
                            </Col>
                            <Col md={2}>
                                <img className=" CImage" src={products[0].imgSrc} alt={products[0].title} />
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
                <img className="d-block w-100" src={products[0].imgSrc} alt={products[0].title} />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={products[1].imgSrc} alt={products[1].title} />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={products[2].imgSrc} alt={products[2].title} />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={products[3].imgSrc} alt={products[3].title} />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={products[4].imgSrc} alt={products[4].title} />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={products[5].imgSrc} alt={products[5].title} />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={products[6].imgSrc} alt={products[6].title} />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={products[7].imgSrc} alt={products[7].title} />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={products[8].imgSrc} alt={products[8].title} />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={products[9].imgSrc} alt={products[9].title} />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={products[10].imgSrc} alt={products[10].title} />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={products[11].imgSrc} alt={products[11].title} />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={products[12].imgSrc} alt={products[12].title} />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={products[13].imgSrc} alt={products[13].title} />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={products[14].imgSrc} alt={products[14].title} />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={products[15].imgSrc} alt={products[15].title} />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={products[16].imgSrc} alt={products[16].title} />
            </Carousel.Item>
    </Carousel>
  );
    }
}
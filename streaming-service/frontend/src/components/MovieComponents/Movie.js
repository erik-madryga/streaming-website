import {Card, Button, Row, Col, ButtonGroup} from "react-bootstrap";

export default function Movie({movie}) {
    return <>
        <Col>
            <Card className="text-center" border='dark' bg='warning' style={{ width: '10rem'}}>
                <Card.Img  variant='top' src={movie.images[0].href} style={{ height: '12rem'}}/>
                <Card.Footer>
                    <Button variant='primary' style={{ width: '7rem'}}>Best Buy</Button>
                </Card.Footer>
            </Card>
            <hr style={{ width: '9rem'}}/>
        </Col>
    </>
}



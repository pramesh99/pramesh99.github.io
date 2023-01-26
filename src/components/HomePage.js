import { Container, Row, Col, Image, Card} from 'react-bootstrap';
import React from 'react';
import Typed from 'typed.js';

import Me from '../images/me.webp';

const Home = () => {

    const TypedDemo = () => {
        const el = React.useRef(null);
        const typed = React.useRef(null);
        React.useEffect(() => {
            const options = {
                strings: [
                    'I\'m a computer science MS student at San Francisco State\n and I enjoy <span style=\'font-weight:bold\'>listening to music</span>',
                    'I\'m a computer science MS student at San Francisco State\n and I enjoy <span style=\'font-weight:bold\'>taking pictures</span>',
                    'I\'m a computer science MS student at San Francisco State\n and I enjoy <span style=\'font-weight:bold\'>learning new programming languages</span>',
                    'I\'m a computer science MS student at San Francisco State\n and I enjoy <span style=\'font-weight:bold\'>building things.</span>'
                ],
                smartBackspace: true,
                typeSpeed: 15,
                backSpeed: 10,
            };

            typed.current = new Typed(el.current, options);
            return () => {
                typed.current.destroy();
            }
        }, [])

        return (
            <div className="type-wrap">
                <span style={{whiteSpace: 'pre', color: "#beead8", fontSize: "max(7px, calc(5px + 1.0vi))"}} ref={el} />
            </div>
        )
    }


    return (
        <div style={{background: "#0f1817"}} className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
            <Container>
                <Card style={{background: "#263e3b", borderRadius: "40px"}}>
                <Row className="align-items-center viewport-height">
                    <Col md={4}>
                        <Image style={{ borderRadius: "30px"}} src={Me} fluid/>
                    </Col>
                    <Col md={8}>
                        <br/>
                        <h1 style={{color: "#e4e3dd"}} className="display-3">Hello!</h1>
                        <h5 style={{color: "#c8eae7"}}>My name is Preetham.</h5>
                        <TypedDemo/>
                        <br/>
                    </Col>
                </Row>
               
                </Card>
            </Container>
        </div>
    )
}

export default Home;
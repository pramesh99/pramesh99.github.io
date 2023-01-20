import { useEffect, useState } from 'react';
import { Container, Card, Col, Row, Image, Modal } from 'react-bootstrap';


const Photography = () => {
    const importAll = (r) => {
        console.log(r.keys().map(r));
        return r.keys().map(r);
    };

    const [images, setImages] = useState([]);
    useEffect(() => { // context(directory, searchSubdirectories?, regex)
        setImages(importAll(require.context('../images/gallery/', false, /\.(png|jpe?g|svg)$/)));
        //
    }, []);

    const [show, setShow] = useState(false);
    const [currImg, setCurrImg] = useState ('');

    return (
        <div style={{background: "#0f1817"}}>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Container>
                <Row xs={1} md={3} lg={4} className='g-4'>
                    {images.map((image,idx) => ( 
                        <Col key={image}>
                            <Image 
                                style={{cursor: 'pointer', height: 450, objectFit: 'cover', borderRadius: '20px'}} 
                                onClick={() => {setShow(true);setCurrImg(image);}} 
                                src={image}                      
                                fluid
                            />
                        </Col>
                        
                    ))}
                </Row>
                

                <Modal size='xl' dialogClassName='my-modal' onClick={() => {setShow(false)}} show={show} onHide={() => {setShow(false)}}>
                    <Modal.Body>
                        <Image style={{borderRadius:"20px"}} alt='<smth cool here/>' src={currImg}/>
                    </Modal.Body>
                </Modal>
                <br/>
                <br/>
            </Container>
        </div>
    );
};

export default Photography;
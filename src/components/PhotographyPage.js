import { useEffect, useState } from 'react';
import { Container, Tab, Tabs, Col, Row, Image, Modal } from 'react-bootstrap';

const Photography = () => {
    //for modals
    const [show, setShow] = useState(false);
    const[thumbnails, setThumbnails] = useState([]);
    const [image, setImage] = useState('');
    const [key, setKey] = useState('home');

    const openModal = (idx) => {
        let x = idx + 1;
        if (x < 10) {
            x = '0'+ x;
        }
        setImage(require(`../images/gallery/${x}.jpg`));
        setShow(true);
    }

    const importAll = (r) => {
        return r.keys().map(r);
    };

    useEffect(() => { // context(directory, searchSubdirectories?, regex)
        console.log('here');
        setThumbnails(importAll(require.context('../images/thumbnails/', false, /\.(png|jpe?g|svg)$/)));
    }, []);


    return (
        <div style={{background: "#0f1817"}}>
            <Container>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Row xs={1} md={3} lg={4} className='g-4'>
                    {thumbnails.map((thumbnail,idx) => (
                        <Col key={thumbnail}>
                            <Image
                                style={{cursor: 'pointer', height: 450, objectFit: 'cover', borderRadius: '20px'}} 
                                onClick={() => {openModal(idx)}} 
                                src={thumbnail}                      
                                fluid
                            />
                            {/* <h6 style={{color: 'white'}}>{idx}</h6> */}
                        </Col>                       
                    ))}
                </Row>
                
                <Modal size='xl' dialogClassName='my-modal' onClick={() => {setShow(false)}} show={show} onHide={() => {setShow(false)}}>
                    <Modal.Body>
                        <Image style={{borderRadius:"20px"}} alt='<smth cool here/>' src={image}/>
                    </Modal.Body>
                </Modal>
                <br/>
                <h6 style={{fontSize: '9px', color: '#b0d387'}}>&copy; 2023 Preetham Ramesh</h6>
                <br/>
            </Container>
        </div>
    );
};

export default Photography;
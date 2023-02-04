import { useEffect, useState } from 'react';
import { Container, Col, Row, Image, Modal } from 'react-bootstrap';

const Photography = () => {
    //for modals
    const [show, setShow] = useState(false);
    const [thumbnails, setThumbnails] = useState([]);
    const [image, setImage] = useState('');

    const openModal = (idx) => {
        // padding signle digit numbers with zero to match with file naming
        let x = idx + 1;
        if (x < 10) {
            x = '0'+ x;
        }
        setImage(require(`../images/galleryv2/${x}.jpg`)); // import high res image on selection
        setShow(true); // only open modal after image is loaded
    }

    // import thumbnails from file
    const importAll = (r) => {
        return r.keys().map(r);
    };

    // import all thumbnails when page is loaded
    useEffect(() => { // context(directory, searchSubdirectories?, regex)
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
                {/* map over list of picture filenames and display on page */}
                <Row xs={1} md={3} lg={4} className='g-4'>
                    {thumbnails.map((thumbnail,idx) => (
                        <Col key={thumbnail}>
                            <Image
                                style={{cursor: 'pointer', height: 450, objectFit: 'cover', borderRadius: '20px'}} 
                                onClick={() => {openModal(idx)}} 
                                src={thumbnail}                      
                                fluid
                            />
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
import {Card, Row, Col, Badge, Button} from 'react-bootstrap';
import {FiGithub} from 'react-icons/fi'

function getColor (c) {
    const color = {
        "Python": "warning",
        "React.js": "info",
    }

    return color[c];
}

const ProjectCard = (props) => {
    return(
        <Card style={{background: "#23261e", borderRadius: "40px"}}>
            <Card.Body>
                <Row className='align-items-center'>
                    <Col sm={4}>
                        <h1 className='display-6' style={{color: '#e4e3dd'}}>{props.title}</h1>
                    </Col>
                    <Col sm={3}>
                        <h6  style={{color: '#e4e3dd'}}>{props.desc}</h6>
                    </Col>
                    <Col sm={2}>
                        <Col className='align-items-center'>
                            {props.tools && props.tools.map((tool) =>(
                                <Col key={tool}>
                                    <Badge pill={true} bg={getColor(tool)}>{tool}</Badge>
                                </Col>
                            ))}
                        </Col>
                    </Col>
                    <Col sm={3}>
                        <Button disabled style={{background: "#b0d387", border: 'none', borderRadius: '40px', color: '#1b1c18'}}>
                            <FiGithub/>{'\tGithub'}
                        </Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
        
    );
};

export default ProjectCard;
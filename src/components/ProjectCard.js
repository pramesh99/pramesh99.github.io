import {Card, Row, Col, Badge, Button} from 'react-bootstrap';
import {FiGithub} from 'react-icons/fi'

function getColor (c) {
    const color = {
        "Python": "danger",
        "C": "danger",
        "node.js": "danger",
        "Java": "danger",
        "HTML": "danger",
        "React.js": "warning",
        "Flask": "warning",
        "Bootstrap": "warning",
        "MaterializeCSS": "warning",
        "MongoDB": "info",
        "Spotify API": "info",
        "pySAT": "info",
    }

    return color[c];
}


const ProjectCard = (props) => {
    return(
        <Card style={{background: "#23261e", borderRadius: "40px"}}>
            <Card.Body>
                <Row className='align-items-center'>
                    <Col md={4}>
                        <h1 className='display-6' style={{color: '#e4e3dd'}}>{props.title}</h1>
                    </Col>
                    <Col md={3}>
                        <h6  style={{color: '#e4e3dd'}}>{props.desc}</h6>
                    </Col>
                    <Col md={2}>
                        <Col style={{alignItems:'center'}}>
                            {props.tools && props.tools.map((tool) =>(
                                <Col key={tool}>
                                    <Badge pill={true} bg={getColor(tool)}>{tool}</Badge>
                                </Col>
                            ))}
                        </Col>
                    </Col>
                    <Col md={3}>
                        <Button disabled style={{margin:"8px", background: "#b0d387", border: 'none', borderRadius: '40px', color: '#1b1c18'}}>
                            <FiGithub/>{'\tGithub'}
                        </Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
        
    );
};

export default ProjectCard;
import { Container, Card, Stack} from 'react-bootstrap';
import ProjectCard from './ProjectCard';

const ProjectsComp = () => {
    return (
        <div style={{background: "#0f1817"}} className="d-flex flex-column min-vh-100">
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Container>
                <Stack gap={3}>
                    <Card style={{background: "#263e3b", borderRadius: "40px", width: '65%', margin: 'auto'}}>
                        <Card.Body>
                            <h1 className='display-4' style={{color: "#e4e3dd"}}>Here are some of my projects</h1>
                        </Card.Body>
                    </Card>
                    <ProjectCard 
                        title={'This website'}
                        desc={'My personal portfolio'}
                        tools={['node.js', 'React.js', 'Bootstrap']}
                        link={'https://github.com/pramesh99/pramesh99.github.io/tree/master'}
                    />
                    <ProjectCard 
                        title={'Track Record'}
                        desc={'Discover your top Spotify artists and song information throughout history'}
                        tools={['Python', 'HTML', 'Flask', 'MaterializeCSS', 'Spotify API']}
                        link={'https://github.com/pramesh99/Track-Record'}
                    />
                    <ProjectCard 
                        title={'Lempel-Ziv compression'}
                        desc={'Implementation of the Lempel-Ziv algorithm using data structures such as tries to losslessly compress text files'}
                        tools={['C']}
                        link={'https://github.com/pramesh99/Lempel-Ziv'}
                    />
                    <ProjectCard
                        title={'Chat app'}
                        desc={'Fullstack chat app with users, friends, and message history'}
                        tools={['Java', 'node.js', 'React.js', 'MongoDB']}
                        link={'https://github.com/pramesh99/Chat-App'}
                    />
                    <ProjectCard
                        title={'Sudoku solver'}
                        desc={'Sudoku solver that uses a boolean satisfiability algorithm to solve puzzles'}
                        tools={['Python', 'pySAT']}
                        link={'https://github.com/pramesh99/SudokuSolver'}
                    />
                    <br/>
                    <br/>
                </Stack>

            </Container>
        </div>
    );
};

export default ProjectsComp;
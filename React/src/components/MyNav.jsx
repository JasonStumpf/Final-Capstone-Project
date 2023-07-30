import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from "react-bootstrap";

function MyNav() {
    return (
        <>
            <Navbar fixed="top" bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand>
                        <img src="/jeopardy.png" width="125" height="30" className="d-inline-block align-top" />
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Link className="navbar-brand" to="/">Home</Link>
                        <Link className="navbar-brand" to="/quiz">Quiz</Link>
                        <Link className="navbar-brand" to="/highscores">High Scores</Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default MyNav;
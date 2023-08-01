import { Link, useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Button, Nav } from "react-bootstrap";
import { useContext } from "react";
import { DataContext } from "./DataProvider";

function MyNav() {
    const {user, setUser} = useContext(DataContext)
    const navigate = useNavigate();

    const handleLogout = () => {
        setUser({ id: null, username: null });
        navigate("/login");
    };

    return (
        <>
            <Navbar fixed="top" bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand>
                        <img src="/jeopardy.png" width="125" height="30" className="d-inline-block align-top" />
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        {user.id ? (
                            <>
                            <Link className="navbar-brand" to="/">Home</Link>
                            <Link className="navbar-brand" to="/quiz">Quiz</Link>
                            <Link className="navbar-brand" to="/highscores">High Scores</Link>
                            <Button variant="dark" onClick={handleLogout}>Logout</Button>
                            <h6 className="text-dark">current user: {user.username}</h6>
                            </>
                        ) : (
                            <>
                            <Link className="navbar-brand" to="/">Home</Link>
                            <Link className="navbar-brand" to="/signup">Sign Up</Link>
                            <Link className="navbar-brand" to="/login">Log In</Link>
                            </>
                        )}
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default MyNav;
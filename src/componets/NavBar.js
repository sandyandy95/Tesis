import React from 'react'
import { Link } from 'react-router-dom'
import{Container, Navbar, Nav} from 'react-bootstrap'

const NavBar = () => {
    return (
        <Navbar className="navbar navbar-dark bg-dark">
        <Container>

            <Nav className="me-auto">
                <Link to ="/" className="nav-link">Encargados</Link>
                <Link to ="/new" className="nav-link">Actividades</Link>
                <Link to ="/new2" className="nav-link">Alimentación</Link>
                <Link to ="/new3" className="nav-link">Categoria</Link>
                <Link to ="/new4" className="nav-link">Establecimiento</Link>
                <Link to ="/new5" className="nav-link">Platos</Link>
                <Link to ="/new6" className="nav-link">Horarios</Link>
                <Link to ="/new7" className="nav-link">prueba</Link>




            </Nav>
        </Container>
        </Navbar>
    )
}
//  <Link to ="/new2" className="nav-link">Ver Detalle</Link>
export default NavBar
//  <Link to ="/new7" className="nav-link">Reserva</Link>
//<Link to ="/new8" className="nav-link">Reserva Alimentación</Link>

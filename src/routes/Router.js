import React from 'react'
import { BrowserRouter, 
    Routes,
    Route,
    Link,
    
}from "react-router-dom";
import App from '../containers/App'
import NavBar from '../componets/NavBar'
import { Container } from 'react-bootstrap';
import ListActividad from '../componets/ListActividad';
import Actividad from '../containers/Actividad';
import Alimentacion from '../containers/Alimentacion';
import ListAlimentacion from '../componets/ListAlimentacion';
import ListCategoria from '../componets/ListCategoria'
import Categoria from '../containers/Categoria'
import ListEstablecimiento from '../componets/ListEstablecimiento'
import Establecimiento from '../containers/Establecimiento'
import ListPlato from '../componets/ListPlato'
import Plato from '../containers/Plato'
import Horario from '../containers/Horario'
import  ListHorario from '../componets/ListHorario'
import Prueba from '../componets/prueba'
import Formulario from '../componets/formulario'
import Login from '../auth/LoginScreen';
const Router2 = () => {
    return (


        <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route exact path="/new22" element ={<App></App>}/>
            <Route exact path="/new" element ={<Container fluid>
                <h1 className="text-center">Listado Actividades</h1>
                <Actividad></Actividad>
             <ListActividad></ListActividad>
            </Container>}/>
            <Route exact path="/new2" element ={
                <Container fluid>
                    <h1 className="text-center">Alimentación</h1>
                    <Alimentacion></Alimentacion>
                    <ListAlimentacion></ListAlimentacion>
                </Container>
            }/>
            <Route exact path="/new3" element ={
                     <Container fluid>
                     <h1 className="text-center">Categoría</h1>
                     <Categoria></Categoria>
                     <ListCategoria></ListCategoria>
                 </Container>    
            }/>
            <Route exact path="/new4" element ={
                 <Container fluid>
                 <h1 className="text-center">Establecimiento</h1>
                 <Establecimiento></Establecimiento>
                 <ListEstablecimiento></ListEstablecimiento>
             </Container>  


            }/>
            <Route exact path="/new5" element ={
            <Container fluid>
            <h1 className="text-center">Listado Platos</h1>
            <Plato></Plato>
            <ListPlato></ListPlato>
            </Container>   
            }/>
            <Route exact path="/new6" element ={
            <Container fluid>
            <h1 className="text-center">Horario</h1>
            <Horario></Horario>
            <ListHorario></ListHorario>
            </Container>
            
            
        }/>
            <Route exact path="/new7" element ={   
            <Container fluid>
            <h1 className="text-center">prueba</h1>
            <Prueba></Prueba>

            </Container> 

            
        }/>
 
        </Routes>
            
        </BrowserRouter>
    )
}

export default Router2

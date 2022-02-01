import React,{useState} from 'react'
import {Container} from 'react-bootstrap'
import ListEncargado from '../componets/ListEncargado'
import Encargado from '../containers/Encargado'
import {Modal,ModalBody,ModalHeader,ModalFooter, Table} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
 const App=()=> {
/*  const Cancelar=()=>{
    window.location.href='/'

}*/
//const [modalAgregar, setmodalAgregar] = useState(false);


  return (
      <Container fluid>
        <h1 className="text-center">Listado Encargados</h1>
              
        <Encargado></Encargado> 
        <ListEncargado></ListEncargado>

    </Container>
  );
}

export default App;
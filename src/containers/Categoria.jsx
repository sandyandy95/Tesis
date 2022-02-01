import axios from 'axios'
import React, {useState} from 'react'
 import {Container, Form} from 'react-bootstrap'
 import Swal from 'sweetalert2'
 import {Modal,ModalBody,ModalHeader,ModalFooter, Table} from 'reactstrap'



export const Categoria = () => {
   const [modalAgregar, setmodalAgregar] = useState(false);

    const [data, setData] = useState({

        nombreCategoria: "",
        descripcionCategoria: "",
    })
    const handleChange = ({target}) => {
        setData({
            ...data,
            [target.name]: target.value
        })

    }
    const URL="http://localhost:4000/api/categorias/"
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post(URL,data);

        if (response.status === 200) {
            Swal.fire(
                
                'Guardado!',
                `El registro ha sido guardado exitosamente!`,
                'success',

                
            )
            //window.location.href='/';
     //     history.push('/')
        }else {
            Swal.fire(
             //   setmodalAgregar(false),
                'Error!',
                'Hubo un problema al crear el registro!',
                'error'
            )
        }
  
       
    }


    
    return (

<button className="btn btn-success"onClick={()=>setmodalAgregar(true)}>
<Container  >
         <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-person-plus" viewBox="0 0 16 16">
                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                </svg>
                </Container>
        <Container>
        <h1 className="text-center">
            </h1>
            <h1 className="text-center">
            </h1>
           <Modal isOpen={modalAgregar}>
           <Container>
           <h1 className="text-center">Nueva Categoria</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                <label>Nombre Categoria</label>
                    <Form.Control
                 //   estado={nombre}
                   // cambiarEstado={cambiarNombre}
                    type="text"
                    name="nombreCategoria"
                    placeholder="Nombre"
                    value={data.nombreCategoria}
                    onChange={handleChange}/>
                </Form.Group>
                <Form.Group className="mb-3">
                <label>Descripcion</label>
                    <Form.Control
                    type="text"
                    name="descripcionCategoria"
                    placeholder="descripcionCategoria"
                    value={data.descripcionCategoria}
                    onChange={handleChange}/>
                </Form.Group>
                <button className="btn btn-success">Guardar</button>{"         "}
                <button className="btn btn-success" onClick={()=>setmodalAgregar(false)} >Cerrar</button>

            </Form>

            </Container>
            </Modal>
           
                 
        </Container>

        </button>
   
    )
}
export default Categoria;
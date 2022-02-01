import React, {useEffect, useState} from 'react'
import { Formik } from 'formik';
import axios from 'axios'
import { Container } from 'react-bootstrap'
import {Modal,ModalBody,ModalHeader,ModalFooter, Table} from 'reactstrap'

const ListHorario = () => {
    const URL="http://localhost:4000/api/horariodeactividades"
    const getData =async()=>
{
    const response=await axios.get(URL)

    return response;
}

const [list, setList] = useState([])
const [modalEditar, setmodalEditar] = useState(false);
const [modalEliminar, setmodalEliminar] = useState(false);
const [modalVer, setmodalVer] = useState(false);
const [horarioSeleccionado, setHorarioSeleccionado] = useState({
    horarioInicio:"",
    horarioFin: "",
    fechaFin: "",
   fechaInicio:"",
   cantDisponible:"",
   cantOcupado:"",
   actvidadHorarioActividad:""
}
);
const seleccionarEncargado=(elemento,caso)=>{
    setHorarioSeleccionado(elemento);
    (caso==='Editar')?setmodalEditar(true):(caso==='Eliminar')?setmodalEliminar(true):setmodalVer(true)
}



useEffect(() => {
    getData().then((response)=>{
        setList(response.data)
    }
)}, [])

const handleChange=(e)=>{

    const{name, value}=e.target;
    setHorarioSeleccionado((prevState)=>(
    {
        ...prevState,
        [name]: value

    }))
}
const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("actualizando")

}



const editar=async(id,data)=>{

      await axios.put(`http://localhost:4000/api/horariodeactividades/${id}`,data);
      window.location.href='/'
    setmodalEditar(false);
}
const eliminar=async(id)=>{
    await axios.delete(`http://localhost:4000/api/horariodeactividades/${id}`);
    window.location.href='/'
}
const ver=async(id,data)=>{
    window.location.href='/'
console.log("si2")
}
const crear=async(data)=>{
    const URL="http://localhost:4000/api/horariodeactividades/ "
     await axios.post(URL,data);

}
/** <button className="btn btn-success" onClick={()=>editar(horarioSeleccionado._id,horarioSeleccionado)}  >Actualizar</button>/ */

    return (

        <Container>
            <div className="table-responsive">
         <table className="table table-bordered">
            <thead>
                <tr>
                    <th>Fecha Inicio</th>
                    <th>Fecha Fin</th>
                    <th>Acciones</th>
                </tr>
            </thead>
        <tbody>
          {list.map((elemento, pos)=>(
              
            
            <tr key={pos}  >
                  
              <td>{elemento.fechaInicio}</td>
              <td>{elemento.fechaFin}</td>
              <td className="d-flex justify-content-center .justify-content-lg-start gap-1">

              <button className="btn btn-success" onClick={()=>seleccionarEncargado(elemento, 'Editar')} >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
              <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
              </svg>
              
              
                </button> {"   "} 
              <button className="btn btn-success"onClick={()=>seleccionarEncargado(elemento, 'Eliminar')}> 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
               <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
               </svg>
              </button> {"   "} 
              <button className="btn btn-success" onClick={()=>seleccionarEncargado(elemento, 'Ver')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                </svg></button>
              </td>
             </tr>
          ))
       
          }
          
        </tbody>
      </table>
      </div>
      <Modal isOpen={modalEditar}>
          <ModalHeader>
              <div>
                  Editar
              </div>
          </ModalHeader>
          <ModalBody>
          <Formik>
                  <div className="form-group" onSubmit={handleSubmit}>
                      <label>Horario Inicio</label>
                  <input
                    className='form-control' 
                    type="text"
                    name="horarioInicio"
                    value={horarioSeleccionado && horarioSeleccionado.horarioInicio}
                    onChange={handleChange}
                    />
                   <label>Horario Fin</label>
                   <input                                                                                                                                                                                                
                    className='form-control'
                    type="text"
                    name="horarioFin"
                    value={horarioSeleccionado&&horarioSeleccionado.horarioFin}
                    onChange={handleChange}/>
                  <label>Fecha Inicio</label>
                   <input                                                                                                                                                                                                
                    className='form-control'
                    type="date"
                    name="fechaInicio"
                    pattern="00/00/0000"
                    value={horarioSeleccionado&&horarioSeleccionado.fechaInicio}
                    onChange={handleChange}/>
                      <label>Fecha fin</label>
                  <input
                    className='form-control'
                    type="date"
                    name="fechaFin"
                    value={horarioSeleccionado&&horarioSeleccionado.fechaFin}
                    onChange={handleChange}
                    />
                    <label>Cantidad Disponible</label>
                    <input
                    className='form-control'
                    type="number"
                    name="cantDisponible"
                    value={horarioSeleccionado&&horarioSeleccionado.cantDisponible}
                    placeholder=""
                    onChange={handleChange}
                    />

                    <label>Cantidad Ocupado</label>
                    <input
                    className='form-control'
                    type="number"
                    name="cantOcupado"
                    value={horarioSeleccionado&&horarioSeleccionado.cantOcupado}
                    placeholder=""
                    onChange={handleChange}
                    />
                    <label>Actividad</label>
                    <input
                    className='form-control'
                    type="text"
                    name="actvidadHorarioActividad"
                    value={horarioSeleccionado&&horarioSeleccionado.actvidadHorarioActividad}
                    placeholder=""
                    onChange={handleChange}
                    />
              </div>
              </Formik>  
          </ModalBody>
          <ModalFooter>
            <button className="btn btn-success" onClick={()=>editar(horarioSeleccionado._id,horarioSeleccionado)}  >Actualizar</button>
            <button className="btn btn-success"onClick={()=>setmodalEditar(false)}  >Cancelar </button>


          </ModalFooter>
      </Modal>
      <Modal isOpen={modalEliminar} >
    
      <ModalHeader>
              <div>
                  ELIMINAR
              </div>
          </ModalHeader>
          <ModalBody>
              <div>
                  Desea Eliminar {horarioSeleccionado && horarioSeleccionado.horarioFin}?
              </div>
              
          </ModalBody>
          <ModalFooter>
              <button className="btn btn-success" onClick={()=>eliminar(horarioSeleccionado._id)} >Si</button>
              <button className="btn btn-success"onClick={()=>setmodalEliminar(false)}>No</button>

          </ModalFooter>
          
      </Modal>
      <Modal isOpen={modalVer}>
      <ModalHeader>
              <div>
                 VER MAS
              </div>
          </ModalHeader>
          <ModalBody>
          <div className="form-group" onSubmit={handleSubmit} >
  
                   <label>Horario Inicio</label>
                   <input
                    readOnly  
                    className='form-control' 
                    type="text"
                    name="horarioInicio"
                    value={horarioSeleccionado && horarioSeleccionado.horarioInicio}
                    onChange={handleChange}
                    />
                      <label>Horario Fin</label>
                  <input
                    readOnly  
                    className='form-control'
                    type="text"
                    name="horarioFin"
                    value={horarioSeleccionado&&horarioSeleccionado.horarioFin}
                    onChange={handleChange}
                    />
                      <label>Fecha Inicio</label>
                  <input
                    readOnly                                                                                                                                                                                                  
                    className='form-control'
                    type="date"
                    name="fechaInicio"
                    placeholder="00/00/0000"
                    value={horarioSeleccionado&&horarioSeleccionado.fechaInicio}
                    onChange={handleChange}/>
                    <label>Fecha fin</label>
                    <input
                    readOnly  
                    className='form-control'
                    type="date"
                    name="fechaFin"
                    value={horarioSeleccionado&&horarioSeleccionado.fechaFin}
                    //placeholder="00/00/0000"
                    onChange={handleChange}
                    />
                    <label>Cantidad Disponible</label>
                    <input
                    readOnly  
                    className='form-control'
                    type="number"
                    name="cantDisponible"
                    value={horarioSeleccionado&&horarioSeleccionado.cantDisponible}
                    placeholder="00/00/0000"
                    onChange={handleChange}
                    />
                    <label>Cantidad Ocupado</label>
                    <input
                    readOnly  
                    className='form-control'
                    type="number"
                    name="cantOcupado"
                    value={horarioSeleccionado&&horarioSeleccionado.cantOcupado}
                    
                    onChange={handleChange}
                    />
                    <label>Actividad</label>
                    <input
                    readOnly  
                    className='form-control'
                    type="text"
                    name="actvidadHorarioActividad"
                    value={horarioSeleccionado&&horarioSeleccionado.actvidadHorarioActividad}
                //placeholder="00/00/0000"
                    onChange={handleChange}
                    />
              </div>
              
          </ModalBody>
          <ModalFooter>
              <button className="btn btn-success"onClick={()=>setmodalVer(false)}>Aceptar</button>
          </ModalFooter>
      </Modal>


        </Container>
    )
}
export default ListHorario

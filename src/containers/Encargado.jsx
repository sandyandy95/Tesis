import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Container } from 'react-bootstrap'
import * as Yup from 'yup';
import {Modal,ModalBody,ModalHeader,ModalFooter} from 'reactstrap'
import { TextField } from '../componets/TextField'
import { Formik , Form} from "formik";
const Encargado = () => {
const validate = Yup.object().shape({
    nombreEncargado: Yup.string()
      .max(5, 'Must be 5 characters or less')
      .required('Nombre es Required'),
      apellidoEncargado: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
      correoEncargado: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
      fechaNacimientoEncargado: Yup.date()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
      cedulaEncargado: Yup.number()
      //.oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
  })

const [modalAgregar, setmodalAgregar] = useState(false);

const [data, setData] = useState({
 
        nombreEncargado: "",
        apellidoEncargado: "",
       correoEncargado:"",
       fechaNacimientoEncargado:"",
       cedulaEncargado:"",
})
const handleChange = ({target}) => {
    setData({
        ...data,
        [target.name]: target.value
    })

}

/*const handleSubmit=async (e)=>{
    e.preventDefault();
    console.log("actualizando")
}*/

const crear=async(data)=>{
    const URL="http://localhost:4000/api/encargados/ "
     await axios.post(URL,data);

}
/** <button className="btn btn-success" onClick={()=>crear(adminSeleccionado._id,adminSeleccionado)}  >Actualizar</button>/ */

    return (
    /*<Container>



      <Modal isOpen={modalAgregar}>
          <ModalHeader>
              <div>
                  Agregar
              </div>
          </ModalHeader>
          <ModalBody>
          <Formik
         initialValues={{
            nombreEncargado: "",
            apellidoEncargado: "",
           correoEncargado:"",
           fechaNacimientoEncargado:"",
           cedulaEncargado:""
                  }}
        validationSchema={validate}
        onSubmit={(values, {setSubmitting, resetForm}) => {
            // When button submits form and form is in the process of submitting, submit button is disabled
            setSubmitting(true);
  
            // Simulate submitting to database, shows us values submitted, resets form
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              resetForm();
              setSubmitting(false);
            }, 500);
        }}
        //{formik => (
      >


{({ values,handleSubmit,
          errors,
          touched,
          handleBlur,
          isSubmitting }) => (
        <div>
            <Form className="form-group" onSubmit={handleSubmit}>
    
                  <div >
              
                    <TextField label="First Name" name="firstName" type="text" 
                  
                    className='form-control' 
                   type="text"
                    name="nombreEncargado"
                    value={data.nombreEncargado}         
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />
    
          
                      <label>Apellido</label>
                  <input
                    className='form-control'
                    type="text"
                    name="apellidoEncargado"
                    value={data.apellidoEncargado}
                    onChange={handleChange}
                    />
                      <label>Correo</label>
                  <input                                                                                                                                                                                                
                    className='form-control'
                    type="email"
                    name="correoEncargado"
                    value={data.correoEncargado}
                    onChange={handleChange}/>
                    <label>Fecha Nacimiento</label>
                    <input
                    className='form-control'
                    type="text"
                    name="fechaNacimientoEncargado"
                    value={data.fechaNacimientoEncargado}
                    placeholder="00/00/0000"
                    onChange={handleChange}
                    />
                    
              </div>

              </Form>
              </div>
)}
              </Formik>
       
          </ModalBody>
          <ModalFooter>
            <button className="btn btn-success" onClick={()=>setmodalAgregar(false),crear()}  >Crear</button>
            <button className="btn btn-success"onClick={()=>setmodalAgregar(false)}  >Cancelar </button>
          </ModalFooter>
      </Modal>
 
        </Container>
 
     */
    <div></div>
    )
}
export default Encargado

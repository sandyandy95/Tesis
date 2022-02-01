import React from 'react';
import {Formik} from 'formik'
import { Container } from 'reactstrap';
import * as Yup from 'yup';
const formulario =()=>{
 /*   const validationSchema = Yup.object().shape({
        name: Yup.string()
        .min(2, "*Names must have at least 2 characters",console.log("ppp"))
        .max(100, "*Names can't be longer than 100 characters",console.log("2222"))
        .required("*Name is required",console.log("77777")),
      });
*/
    return (
        <>
        <Formik
        initialValues={
            {
                nombre:'',
                correo:''
            }
        }
        //validationSchema={validationSchema}
        validate={(valores)=>{
            let errores ={};
        if(!valores.nombre){
            errores.nombre='ingresa nombre'
            console.log("vale2")
        }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre))
        {
            errores.nombre='nombre mal escrito'
            console.log("vale")

        }
    
    }}
        onSubmit={(valores)=>
        {
        }}
        >
            {({handleSubmit,errors, values,handleChange,handleBlur,touched})=>(
        <Container>
        <form className="form-group" onSubmit={handleSubmit}>
            <div>
            <label htmlFor="nombre">Nombre</label>
            <input 
            type="text" id="nombre"
            placeholder="nombre" 
            value={values.nombre}
            onChange={handleChange}
            className={touched.name && errors.name ? "has-error" : null}
            />
              {touched.name && errors.name ? (
                <div className="error-message">{errors.name}</div>
              ): null}
            <div>hola</div>
            </div>
                        
            <button type="submit">Enviar</button>
            <p >Formulario bn</p>
        </form>
        </Container>
        )}
        </Formik>
        </>
    )
}
export default formulario

/**
 * <div>
            <label htmlFor="correo">Correo</label>
            <input type="email" 
            id="correo" 
            placeholder="correo@hotmail.com"
            value={values.correo}
            onChange={handleChange}
            onBlur={handleBlur}
            />
            </div>
*/
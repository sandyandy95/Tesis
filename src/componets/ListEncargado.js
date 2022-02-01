import React, { useEffect, useState } from "react";
import { Formik , Form} from "formik";
import axios from "axios";
import * as Yup from "yup";
import { Container } from "react-bootstrap";
import { Modal, ModalBody, ModalHeader, ModalFooter, Table } from "reactstrap";
import { TextField } from "./TextField";

const Encargado = () => {
  const URL = "http://localhost:4000/api/encargados";
  const getData = async () => {
    const response = await axios.get(URL);

    return response;
  };

  // RegEx for phone number validation
  const phoneRegExp =
    /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

  // Schema for yup
  const validationSchema = Yup.object().shape({
    nombreEncargado: Yup.string()
      .min(2, "*Names must have at least 2 characters")
      .max(100, "*Names can't be longer than 100 characters")
      .required("*Name is required"),
    correoEncargado: Yup.string()
      .email("*Must be a valid email address")
      .max(100, "*Email must be less than 100 characters")
      .required("*Email is required"),
  });

  const [list, setList] = useState([]);
  const [modalEditar, setmodalEditar] = useState(false);
  const [modalEliminar, setmodalEliminar] = useState(false);
  const [modalVer, setmodalVer] = useState(false);
  //const [nombreValid, setnombreValid] = useState(true);
const defaulEncargado={
  nombreEncargado: "",
  apellidoEncargado: "",
  correoEncargado: "",
  fechaNacimientoEncargado: "",
  cedulaEncargado: "",
  passwordEncargado: "",
}

/*  const encargadoSelected ={
    
    nombreEncargado: "fghjklñ",
    apellidoEncargado: "fghjk",
    correoEncargado: "hhh@jjj.com",
    fechaNacimientoEncargado: "ghjk",
    cedulaEncargado: "ghjk",
    passwordEncargado: "ghj",

  }*/
  const encargadoSelected =null
  const seleccionarEncargado = (elemento, caso) => {
  
    caso === "Editar"
      ? setmodalEditar(true)
      : caso === "Eliminar"
      ? setmodalEliminar(true)
      : setmodalVer(true);
  };

  useEffect(() => {
    getData().then((response) => {
      setList(response.data);
    });
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("actualizando");
  };

  const editar = async (id, data) => {
    await axios.put(`http://localhost:4000/api/encargados/${id}`, data);
    window.location.href = "/";
    setmodalEditar(false);
  };
  const eliminar = async (id) => {
    await axios.delete(`http://localhost:4000/api/encargados/${id}`);
    window.location.href = "/";
  };
  const ver = async (id, data) => {
    window.location.href = "/";
    console.log("si2");
  };
  const crear = async (data) => {
    const URL = "http://localhost:4000/api/encargados/ ";
    await axios.post(URL, data);
  };
  /** <button className="btn btn-success" onClick={()=>editar(encargadoSeleccionado._id,encargadoSeleccionado)}  >Actualizar</button>/ */

  return (
    <Container>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {list.map((elemento, pos) => (
              <tr key={pos}>
                <td>{elemento.nombreEncargado}</td>
                <td>{elemento.apellidoEncargado}</td>
                <td className="d-flex justify-content-center .justify-content-lg-start gap-1">
                  <button
                    className="btn btn-success"
                    onClick={() => seleccionarEncargado(elemento, "Editar")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-pencil-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                    </svg>
                  </button>{" "}
                  {"   "}
                  <button
                    className="btn btn-success"
                    onClick={() => seleccionarEncargado(elemento, "Eliminar")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-trash-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                    </svg>
                  </button>{" "}
                  {"   "}
                  <button
                    className="btn btn-success"
                    onClick={() => seleccionarEncargado(elemento, "Ver")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-eye-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                      <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal isOpen={modalEditar}>
        <ModalHeader>
          <div>Editar</div>
        </ModalHeader>
        <ModalBody>
          <Formik
            initialValues={
              encargadoSelected || defaulEncargado
            }
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
              <div>
                <Form onSubmit={handleSubmit}>
                <TextField
                   
                  label="First Name"
                  name="apellidoEncargado"
                  type="text"
                  value={values.apellidoEncargado}
                />
                <TextField
                  label="First Name"
                  name="correoEncargado"
                  type="email"
                  value={values.correoEncargado}
                />

                <button className="btn btn-success" type="submit">
                  Actualizar
                </button>
                <button className="btn btn-success">Cancelar </button>
                </Form>
              </div>
            )}
          </Formik>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </Modal>
      <Modal isOpen={modalEliminar}>
        <ModalHeader>
          <div>ELIMINAR</div>
        </ModalHeader>
        <ModalBody>
          <div>
            Desea Eliminar{" "}

          </div>
        </ModalBody>
        <ModalFooter>
          <button
            className="btn btn-success"

          >
            Si
          </button>
          <button
            className="btn btn-success"
            onClick={() => setmodalEliminar(false)}
          >
            No
          </button>
        </ModalFooter>
      </Modal>
      <Modal isOpen={modalVer}>
        <ModalHeader>
          <div>VER MAS</div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group" onSubmit={handleSubmit}>
            <label>Nombre</label>
            <input
              readOnly
              className="form-control"
              type="text"
              name="nombreEncargado"
     
            />
            <label>Apellido</label>
            <input
              readOnly
              className="form-control"
              type="text"
              name="apellidoEncargado"
      
            />
            <label>Correo</label>
            <input
              readOnly
              className="form-control"
              type="text"
              name="correoEncargado"
  
            />
            <label>Fecha de nacimiento</label>
            <input
              readOnly
              className="form-control"
              type="text"
              name="fechaNacimientoEncargado"

            />
          </div>
        </ModalBody>
        <ModalFooter>
          <button
            className="btn btn-success"
            onClick={() => setmodalVer(false)}
          >
            Aceptar
          </button>
        </ModalFooter>
      </Modal>
    </Container>
  );
};
export default Encargado;

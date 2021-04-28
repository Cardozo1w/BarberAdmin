import React from "react";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import clienteAxios from "../config/axios";
import axios from 'axios';

const NuevoServicio = () => {
  const [servicio, setservicio] = useState({
    nombre: "",
    descripcion: "",
    duracion: 0,
    costo: 0,
  });

  const actualizarState = (e) => {
    setservicio({
      ...servicio,
      [e.target.name]: e.target.value,
    });
  };

  //Enviar peticion a la api
  const crearServicio = async (e) => {
    e.preventDefault();

    //Peticion a axios
    const { data } = await clienteAxios.post(
        "/api/servicios",
        servicio
      );

      console.log(data);
    }

  return (
    <Fragment>
      <div className="container d-flex justify-content-center flex-column">
        <h1 className="titulos">AJ BarberShop</h1>
        <h3 className="titulos">Agregar Servicio</h3>
        <div className="row">
          <div className="col-md-12 mx-auto">
            <form className="bg-white bordered" onSubmit={crearServicio}>
              <div className="form-group">
                <label htmlFor="nombre">Nombre Servicio</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="nombre"
                  name="nombre"
                  placeholder="Nombre Servicio"
                  onChange={actualizarState}
                />
              </div>

              <div className="form-group">
                <label htmlFor="propietario">Descripcion</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="descripcion"
                  name="descripcion"
                  placeholder="Descripcion"
                  onChange={actualizarState}
                />
              </div>

              <div className="form-group">
                <label htmlFor="duracion">Duracion</label>
                <input
                  type="number"
                  className="form-control form-control-lg"
                  id="duracion"
                  name="duracion"
                  placeholder="Duracion"
                  onChange={actualizarState}
                />
              </div>

              <div className="form-group">
                <label htmlFor="costo">Costo</label>
                <input
                  type="number"
                  className="form-control form-control-lg"
                  id="costo"
                  name="costo"
                  placeholder="Costo"
                  onChange={actualizarState}
                />
              </div>

              <input
                type="submit"
                className="btn btn-primary mt-3 w-100 font-weight-bold"
                value="Agregar Servicio"
              />
            </form>
          </div>
        </div>
        <Link
          to={"/"}
          className="btn btn-outline-primary mt-3  font-weight-bold"
        >
          Regresar
        </Link>
      </div>
    </Fragment>
  );
};

export default NuevoServicio;

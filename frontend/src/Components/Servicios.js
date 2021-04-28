import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Servicios = ({ service }) => {
  if (service.length === 0) return null;
  return (
    <Fragment>
      <div className='container d-flex justify-content-center flex-column'>
      <h1 className="titulos">AJ BarberShop</h1>
      <h3 className="titulos">Servicios</h3>

      <Link to={'/nuevo'}className="btn btn-outline-primary ">Agregar nuevo servicio</Link>

<div className="contenedor-servicios">
      <div className="lista-servicio">
        {service.map((servicio) => (
          <Link key={servicio.id}>
            <h3>{servicio.nombre}</h3>
            <p>Duracion: {servicio.duracion} minutos</p>
            <p>Costo: {servicio.costo} mxn</p>
          </Link>
        ))}
      </div>
      </div>
      </div>
    </Fragment>
  );
};

export default Servicios;

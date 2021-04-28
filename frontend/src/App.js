import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import clienteAxios from "./config/axios";

//Componentes
import Servicios from "./Components/Servicios";
import NuevoServicio from './Components/NuevoServicio'

function App() {
  //State de la aplicacion
  const [service, setService] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const {data} = await clienteAxios.get("/api/servicios");
      setService(data);
    };

    consultarAPI();
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={() => <Servicios service={service}/>} />
        <Route exact path="/nuevo" component={() => <NuevoServicio/>} />
      </Switch>
    </Router>
  );
}

export default App;

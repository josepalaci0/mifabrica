/**Modulos o componentes que hacen parte del Home */
//import { Fabricas } from "./fabricas/Fabricas";
import { Search } from "./search/Search";
import { Configuracion } from "../configuracion/Configuracion";

/**Styles home */
import '../configuracion/configuracion.css';
import { useState } from "react";

/**Funcion Home principal */
export const Home = (data) => {


  const [estadoconfiguracion, setEstadoconfiguracion] = useState(false)

  let ValidateConfiguracion = (data) => {

    if (estadoconfiguracion === true) {
      Configuracion(data)
      return Configuracion(data)
    }
  }
  

  let home = (
    <div className="home">

      <div className="search">{Search(data)}</div>
      <div className="fabricas">{ }</div>
      <div className="chats">4</div>
      <div className="mensajes">5</div>
      <div className="info">6</div>
      <div className="recomendado">7</div>
      <scroll-container>
        <scroll-page id="page-1">1</scroll-page>
        <scroll-page id="page-2">2</scroll-page>
        <scroll-page id="page-3">3</scroll-page>
      </scroll-container>
      <div id="configuracion">
        <img onClick={() => setEstadoconfiguracion(!estadoconfiguracion)} alt="config-perfil" id="config-perfil" src="https://cdn-icons-png.flaticon.com/512/17/17004.png" />
        <img alt="config-sitio" id="config-sitio" src="https://i.pinimg.com/originals/b0/dc/b1/b0dcb1dabc27c57ca4de2fcdfbc0915a.png" />
        <img onClick={() => {
          localStorage.removeItem('login')
          window.location.reload(true);
        }} alt="config-logoff" id="config-logoff" src="https://cdn-icons-png.flaticon.com/512/56/56805.png" />
      </div>

      {ValidateConfiguracion(data)}

    </div>
  );
  return home;
};

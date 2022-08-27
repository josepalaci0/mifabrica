/**Modulos o componentes que hacen parte del Home */
import { Fabricas } from "./fabricas/Fabricas";
import { Chats } from "./chats/Chats";
import { Info } from "./info/Info";
import { Detalles } from "./detalles/Detalles";

import { Configuracion } from "../configuracion/Configuracion";
import {ValidateInfo} from '../../content/ValidateInfo';

/**Styles home */
import '../configuracion/configuracion.css';
import './search/search.css'
import {  useState } from "react";

/**Funcion Home principal */
export const Home = (data) => {


  const [estadoconfiguracion, setEstadoconfiguracion] = useState(false)
  const [searchs, setSearchs] = useState("");
  let ValidateConfiguracion = (data) => {

    if (estadoconfiguracion === true) {
      Configuracion(data)
      return Configuracion(data)
    }
  }
  
  
  

  let home = (
    <div className="home">
      <div className="search">{
        <div id="searchs">
        <input name="searchs" type="text" onChange={ e => setSearchs(ValidateInfo(data, e.target.value))} />
        </div>
        }</div>
      <div className="fabricas">{ Fabricas(data,searchs)}</div>
      <div className="chats">{Chats(data, searchs)}</div>
      <div className="mensajes">5</div>
      <div className="info">{Info(data, searchs)}</div>
      <div className="recomendado">7</div>
      <scroll-container>
        <scroll-page id="page-1">{Detalles(data,searchs)}</scroll-page>
        
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

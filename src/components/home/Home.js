/**Modulos o componentes que hacen parte del Home */
import { Fabricas } from "./fabricas/Fabricas";
import { Search } from "./search/Search";

/**Styles home */
import './search/search.css'
/**Funcion Home principal */

export const Home = (data) => {

  let home = (
    <div className="home">
      <div className="search">{Search(data)}</div>
      <div className="fabricas">{Fabricas(data)}</div>
      <div className="chats">4</div>
      <div className="mensajes">5</div>
      <div className="info">6</div>
      <div className="recomendado">7</div>
      <scroll-container>
        <scroll-page id="page-1">1</scroll-page>
        <scroll-page id="page-2">2</scroll-page>
        <scroll-page id="page-3">3</scroll-page>
      </scroll-container>
    </div>
  );
  return home;
};

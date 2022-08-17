/**Styles para todos los mudulo */
import "./components/login/login.css";
import "./components/home/home.css";

/**Modulos o compenentes principales */
import { FormLogin } from "./components/login/FormLogin";
import { Home } from "./components/home/Home";

/**Libreriar nativas de React */


/**informacion que va tomar desde inicio */
import {Data} from "./data/data";

/**Funciones principales */
function App() {  
  var login = localStorage.getItem("login");
  if (login === null) {
    let app = <div className="App-login">{FormLogin(Data)}</div>;
    return app;
  } else {
    let app = <div className="App-home">{Home(Data)}
    </div>;
    return app;
  }
}
export default App;

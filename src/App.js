import "./App.css";
import { FormLogin } from "./components/FormLogin";

function App() {
  var login = localStorage.getItem("login");
  if (login === null) {
    let app = <div className="App">{FormLogin()}</div>;
    return app;
  } else {
    let app = <div className="App-home">Hola mundo</div>;
    return app;
  }
}

export default App;

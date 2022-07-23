import "./components/login/login.css";
import "./components/home/home.css";
import { FormLogin } from "./components/login/FormLogin";
import { Home } from "./components/home/Home";

function App() {
  var login = localStorage.getItem("login");
  if (login === null) {
    let app = <div className="App-login">{FormLogin()}</div>;
    return app;
  } else {
    let app = <div className="App-home">{Home()}</div>;
    return app;
  }
}

export default App;

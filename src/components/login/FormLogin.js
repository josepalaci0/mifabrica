import { useState } from "react";
import { ValidateLogin } from "../../content/login/ValidateLogin";
import Face from '../facedeteccion/face';

export const FormLogin = (data) => {  
  const [formEmail, setFormEmail] = useState("");
  const [formPasword, setFormPasword] = useState("");
  let logeo = { email: formEmail,password: formPasword, }

  const login = (<>
    <form className="__login">
      <div id="videologin"><Face/></div>
      <input
        className="input-form"        
        onChange={(e) => setFormEmail(e.target.value)}
        placeholder="Email address"
        type="email"
        name="email"
        required
      />
      <br />
      <input
        className="input-form"        
        onChange={(e) => setFormPasword(e.target.value)}
        placeholder="Password"
        type="password"
        name="password"
        required
      />
      <br />
    </form></>

  );

  ValidateLogin(logeo, data);
  return login;
};

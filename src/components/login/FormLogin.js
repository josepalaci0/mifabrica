import { useState } from "react";
import { ValidateLogin } from "../../content/login/ValidateLogin";
import Face from '../facedeteccion/face';

export const FormLogin = (data) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const updateFormData = (event) =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

  const { email, password } = formData;

  const login = (<>
    <form className="__login">
      <div id="videologin"><Face/></div>
      <input
        className="input-form"
        value={email}
        onChange={(e) => updateFormData(e)}
        placeholder="Email address"
        type="email"
        name="email"
        required
      />
      <br />
      <input
        className="input-form"
        value={password}
        onChange={(e) => updateFormData(e)}
        placeholder="Password"
        type="password"
        name="password"
        required
      />
      <br />
    </form></>

  );

  ValidateLogin(formData, data);
  return login;
};

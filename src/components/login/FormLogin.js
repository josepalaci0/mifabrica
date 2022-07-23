import { useState } from "react";
import { ValidateLogin } from "../../content/login/ValidateLogin";

export const FormLogin = () => {
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

  const login = (
    <form className="__login">
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
    </form>
  );

  ValidateLogin(formData);
  return login;
};

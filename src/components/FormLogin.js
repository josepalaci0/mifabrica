import { useState } from "react";
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
  console.log(formData);

  const login2 = (
    <form id="__login">
      <input
        id="input-form"
        value={email}
        onChange={(e) => updateFormData(e)}
        placeholder="Email address"
        type="email"
        name="email"
        required
      />
      <br />
      <input
        id="input-form"
        value={password}
        onChange={(e) => updateFormData(e)}
        placeholder="Password"
        type="password"
        name="password"
        required
      />
      <br />

      <button type="submit" id="input-submit">
        Submit
      </button>
    </form>
  );

  return login2;
};

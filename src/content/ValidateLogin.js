import { Data } from "../data/data";
import { useState } from "react";
export const ValidateLogin = (f) => {
  const [pass, setpass] = useState(Data.info[0].password);
  if (f.password === pass) {
    localStorage.setItem("login", f.password);

    return console.log("contraseña correcta ");
  }
};

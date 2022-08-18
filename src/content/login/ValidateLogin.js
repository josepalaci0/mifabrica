

/*
 ValidateLogin() es una funcion reactiva o agente reactivo
 los datos que maneja son estados de si misma, por lo que se
 entiende que va tomar dicisiones cosecuete a su esta actual.
 */
 export const ValidateLogin = (f,data) => {  
  /*
   los estados en React nos permiten una transmision real de informacion
   en maquetado HTML, nos permite que nuestra aplicacion web funcione como
   una aplicacion de escritorio , ya que devuelve datos de forma reactiva.
   */
console.log(f.password)
  if (f.password === data.info[0].password ) {
    localStorage.setItem("login", f.password);
    /*
     el LocalStorage() es una funcion que le pertence al Lenguaje de 
     programacion y nos permite guardar datos, en nuestro pc , para
     la ejecucucion de aplicaciones como estas.
     */

    return console.log("contraseña correcta ");
  }
};
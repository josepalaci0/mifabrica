
export const Search = (data) => {

  const configuracion = (<div id="configuracion">
    <img alt="config-perfil" id="config-perfil" src="https://cdn-icons-png.flaticon.com/512/17/17004.png" />
    <img alt="config-sitio" id="config-sitio" src="https://i.pinimg.com/originals/b0/dc/b1/b0dcb1dabc27c57ca4de2fcdfbc0915a.png" />
    <img onClick={() => localStorage.removeItem('login')} alt="config-logoff" id="config-logoff" src="https://cdn-icons-png.flaticon.com/512/56/56805.png" />
  </div>)
  return configuracion
}
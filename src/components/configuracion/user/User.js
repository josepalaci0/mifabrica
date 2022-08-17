import './user.css'
export const User = (data) => {
    let object = data.info[0].usuario.informacion[0].documentoUsuario    
    console.log(object)
    var user = (
    <div id="user">
        <img src={object.fotoPerfil} alt="user"/>
        <div id="info-user">
            <div>{object.numeroDocumento}</div>
            <div>{object.primerNombre} {object.segundoNombre}</div>
            
            <div>{object.primerApellido} {object.segundoApellido}</div>
            
            <div>{object.fechaNacimiento}</div>
            <div>{object.fechaExpedicion}</div>
        </div>
    </div>
    )

    return user
}
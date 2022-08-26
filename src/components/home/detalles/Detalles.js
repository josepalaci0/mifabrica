import './detalles.css'
export const Detalles = (data, searchs) => {
    let fabricas_info = data.info[0].usuario.informacion[2].fabrica[0].infoFabrica
    if (searchs[0] === "Busqueda Exitosa: ") {
        const detalles = (<div id='detalles'>
            <img src={fabricas_info.logoFabrica} alt='hilo' />
        </div>)
        return detalles
    }

}
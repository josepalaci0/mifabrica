import './info.css'
export const Info =(data, searchs)=>{
    let fabricas_info = data.info[0].usuario.informacion[2].fabrica[0].infoFabrica
    if (searchs[0]==="Busqueda Exitosa: ") {
        const info = (<div id=''>{fabricas_info.historiaFabrica}</div>)
        return info 
    }
    
}
import React from "react";
import './fabricas.css'
export const Fabricas = (data, searchs) => {
    let fabricas_info = data.info[0].usuario.informacion[2].fabrica[0].infoFabrica
    console.log(fabricas_info)
    if (searchs[0] === 'Busqueda Exitosa: ') {
        const fabrica = (
            <div id="fabricas">
                {fabricas_info.nombreFabrica}
            </div>)
        return fabrica;
    }



}
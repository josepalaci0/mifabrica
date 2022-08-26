export const ValidateInfo = (data, searchs) => {    
    /**
     * algoritmo mejorado "Big N" notacion O(n)     
     */
    try {
        const consoleFirstItem = items => {
            for (let n = 0; n <= data.info.length; n++) {
                let result = items[n].usuario.informacion[n].documentoUsuario.primerNombre
                if (result === searchs) {
                    
                    return result =['Busqueda Exitosa: ', result ]
                } else {
                   return result = ['No se encontro: ', searchs]
                }
            }
        }
        return (consoleFirstItem(data.info))
    } catch (error) {
       return error 
    }    
}
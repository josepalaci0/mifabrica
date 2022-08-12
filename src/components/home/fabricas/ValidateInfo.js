export const ValidateInfo = (data) => {
    let ejemplobusqueda = 'Jose'
    /**
     * algoritmo mejorado "Big N" notacion O(n)     
     */
    try {
        const consoleFirstItem = items => {
            for (let n = 0; n <= data.info.length; n++) {
                let result = items[n].usuario.informacion[n].documentoUsuario.primerNombre
                if (result === ejemplobusqueda) {
                    console.log('busqueda exitosa')
                    return result
                } else {
                   return result = ('Nose encontro', ejemplobusqueda)
                }
            }
        }
        return (consoleFirstItem(data.info))
    } catch (error) {
       return error 
    }    
}
import { User } from "./user/User";
export const Configuracion = (data) =>{
    
    const configuracion = (<div id="configuracion-home">{User(data)} </div>)
    
    return configuracion;
}
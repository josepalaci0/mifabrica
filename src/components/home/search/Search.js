import { useState } from "react";
import {ValidateInfo} from '../../../content/ValidateInfo'
import './search.css'
export const Search = (data) => {     
    const [searchs, setSearchs] = useState("")    
        
    const search = (<div id="searchs">
        <input
            name="searchs"
            type="text"
            value={searchs}
            onChange={ e => setSearchs(e.target.value)} />
    </div>)
    ValidateInfo(data, searchs)
    
    return search;
}
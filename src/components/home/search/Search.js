
import {ValidateInfo} from '../../../content/ValidateInfo'
import './search.css'
export const Search = (data) => {
        
    const search = (<div id="searchs">
        <input
            name="searchs"
            type="text"            
            onChange={ e => ValidateInfo(data, e.target.value)} />
    </div>)
    
    
    return search;
}
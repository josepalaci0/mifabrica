import React, { useEffect } from 'react';
import {ValidateInfo} from '../../../content/ValidateInfo'
import './search.css'
export const Search = (data) => {
    const [searchs, setSearchs] = React.useState("");
    const search = (<div id="searchs">
        <input
            name="searchs"
            type="text"  
                    
            onChange={ e => setSearchs(ValidateInfo(data, e.target.value))} />
    </div>)
    
    const App_Search = {search, info:searchs}
  
    
    return App_Search;
}
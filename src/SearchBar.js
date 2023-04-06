import React from 'react'
import {FaSearch} from 'react-icons/fa'
function SearchBar(props) {




  
  return (
    <div className="input-wrapper">
        <FaSearch id='search-icon' />
        <input type="text" placeholder='Type to search..'  className='input-box' onChange= {props.onChangeHandler} name='searchText' value={props.value}/>
        
    </div>
  )
}

export default SearchBar


import React from 'react'

const Searchbox = ({searchfield, searchange}) =>{
    return(
        <div className = 'pa2'>
             <input 
             className = 'pa3 ba b--green bg-lightest-blue'
             type='search'
             placeholder ="search robots" 
             onChange={searchange}
             
             />

        </div>
       
    )

}

export default Searchbox
import React from 'react'
import Header from '../Components/Header/Header'
import Itemsnumber from '../Components/Itemsnumber/Itemsnumber'

function Landingpage(probs) {
    return (
        <div>
           {probs.type === 'add' ? <Header data='add' /> : <Header data='remove' />}  
            {probs.type === 'add' ? <Itemsnumber page='Addproduct'/> : <Itemsnumber page='removeproduct' />}
        </div>
    )
}

export default Landingpage
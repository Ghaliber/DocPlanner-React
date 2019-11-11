import React from 'react'


const Sponsors = (props) =>{
    return(
        <div className='Holder2'>
            <p className='Giant-Green'>We are a global <br/> company <br/> with local culture</p>
            <div className='Sponsors'>
            {props.spons.map(el => <div className='Single'> <img alt='' width='20px' height='20px' src='https://media.glassdoor.com/sqll/1071394/docplanner-squarelogo-1515684466717.png'/>
             <p > {el}</p> </div>)}
            </div>

        </div>


    )
}
export default Sponsors
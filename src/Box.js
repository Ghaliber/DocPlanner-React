import React from 'react'
const Box = (props) =>{
return(
    <div className='Holder'>
{props.aziz.map(el => (<div className={el.class}> 
<p>{el.title}</p>
<h1  className='Thick-White'>{el.text}</h1>
<div className='Test'> 
{el.dropDown ? <select className='Country-Picker'> <option value> CHOOSE COUNTRY</option> <option value='1'> Tunisia </option></select> : <select className='Country-Picker2'> <option value> CHOOSE COUNTRY</option> <option value='1'> Tunisia </option></select> }
<img alt='' src={el.img} width='400px' height='250px' className='Image'/>
</div>
    </div>
    ))}
    </div>
)

}
export default Box
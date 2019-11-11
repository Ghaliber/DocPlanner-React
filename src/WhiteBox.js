import React from 'react'

const WhiteBox = (props) => {
    return(
  
    <div  className='Boxes-Line01'>
        {props.boxes.map(el => <div className='Small-Box'> 
            <img alt='' src={el.img} />
                <p>
                    <h4 className='Green-Text'>{el.headLine}</h4>
                    {el.text}


                </p>
        </div>)}
    </div>
    )
}
export default WhiteBox
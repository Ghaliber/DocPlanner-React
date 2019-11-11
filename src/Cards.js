import React from 'react'

const Cards = (props) => {
    return (
        <div className='Posters'>
            {props.content.map(el =>
                <div className='Card'>
                    <img alt='' src={el.img} />
                    <div className='Bottom-Card'>
                        <p>{el.country}</p>
                        <button> SEE OPENINGS</button>

                    </div>




                </div>)}


        </div>

    )
}
export default Cards
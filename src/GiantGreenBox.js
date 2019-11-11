import React from 'react'
import WhiteBox from './WhiteBox'
import DocLogo from './0.png'
const content1 = [{
    img: 'https://www.docplanner.com/img/flag.png',
    headLine: 'Leader in 10 countries',
    text: 'Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile'
},
{
    img: 'https://www.docplanner.com/img/patients.png',
    headLine: '30 million unique patients',
    text: 'visits us every month'
}
]
const content2 = [{
    img: 'https://www.docplanner.com/img/visits.png',
    headLine: '1.5 million appointments',
    text: 'booked last month'

}, {
    img: 'https://www.docplanner.com/img/doctors.png',
    headLine: '2 million active doctors',
    text: 'trust in our silution'

}


]
const GiantGreen = () => {
    return (

        <div className='Holder3'>
            <div className='Left'>
                <p className='Giant-Green' >
                    The world's <br /> biggest healthcare platform
                    </p>
                <p >
                    We work from 6 offices all over the world, bringing Docplanner <br /> Group to life in almost 20
                    countries
                    </p>
                <img id='Giant-Logo' alt='' src={DocLogo} width="500px" height="500px"  />
            </div>
            <div className='Right'>
                <div className='Boxes-Line01'>
                    <WhiteBox boxes={content1} />

                </div>
                <div className='Boxes-Line02'>
                    <WhiteBox boxes={content2}/>

                </div>
            </div>


        </div>



    )
}
export default GiantGreen
import React from 'react';
import './App.css';
import Nav from './NavBar'
import Header from './Header'
import Box from './Box'
import Sponsors from './Sponsors'
import GiantGreen from './GiantGreenBox'
import Filler from './Filler'
import Cards from './Cards'
import Footer from './Footer'
const info = [{
  title:'For patients',
  text: 'Find a doctor, book a visit and solve any health-related doubt',
  dropDown: true,
  img:'https://www.docplanner.com/img/screen-marketplace@2x.png',
  class: 'Green'
},
{
  title:'For doctors',
  text: 'Save time managing visits and cut no-shows by half',
  dropDown: false,
  img:'https://www.docplanner.com/img/screen-saas@2x.png',
  class:'Blue'
}]
const spons = ['ZnanyLekarz','Doctoralia','MioDottore', 'DoktorTakvimi','ZnamyLekar']
const CardsLine1 = [{
  img:'https://www.docplanner.com/images/warsaw.png',
  country:'Warsaw'
},
{
  img:'https://www.docplanner.com/images/barcelona.png',
  country:'Barcelona'
},
{
  img:'https://www.docplanner.com/images/istanbul.png',
  country:'Istanbul'
},
{
  img:'https://www.docplanner.com/images/rome.png',
  country:'Rome'
},
{
  img:'https://www.docplanner.com/images/mexico-city.png',
  country:'Mexico City'
},
{
  img:'https://www.docplanner.com/images/curitiba.png',
  country:'Curitiba'
}]
// const CardsLine2 = [{
//   img:'https://www.docplanner.com/images/rome.png',
//   country:'Rome'
// },
// {
//   img:'https://www.docplanner.com/images/mexico-city.png',
//   country:'Mexico City'
// },
// {
//   img:'https://www.docplanner.com/images/curitiba.png',
//   country:'Curitiba'
// }]


function App() {
  return (
    <div className="App">
     <Nav/>
     <Header/>
     <Box aziz={info}/>
     <Sponsors spons={spons}/>
     <GiantGreen className='GiantBox'/>
     <Filler/>
     <Cards  content={CardsLine1}/>
     <Footer/>
     
    </div>
  );
}

export default App;

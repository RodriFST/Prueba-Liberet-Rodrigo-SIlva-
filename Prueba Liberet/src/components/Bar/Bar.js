import React from 'react';
import './Bar.scss';
import clock from '../img/clock.png';
import fork from '../img/fork.png'
import pin from '../img/pin.png'
import flecha from '../img/flecha.png'


const Bar = () => {
    return (
        
<div className='location'>

   <div className='inputP'>
    <img src={pin}></img>
     <input className='input' placeholder='Select location...'></input>
     <img src={flecha}></img>
   </div>

       <div className='day'>
        <h1>Dom</h1>
        <h1>Lun</h1>
        <h1>Mar</h1>
        <h1>Mie</h1>
        <h1>Jue</h1>
        <h1>Vie</h1>
        <h1>Sáb</h1>
        </div>
        <div className='number'>
        <button>28</button>
        <button>29</button>
        <button>30</button>
        <button>01</button>
        <button>02</button>
        <button>03</button>
        <button>04</button>
        </div>
     
        <div className='bar'>
        <div className="icons">
           <a><img src={clock}></img> 2:00-3:00 pm</a>
           <a><img src={fork}></img>Cocina Industrial</a>
        </div>
        </div>
    </div>
    )
}

export default Bar

import React from 'react'
import './datamap.css'
import image13 from './image13.png'
import image14 from './image14.png'
import image15 from './image15.png'
import image16 from './image16.png'
import image17 from './image17.png'
import image18 from './image18.png'
import image19 from './image19.png'
import image20 from './image20.png'
import image21 from './image21.png'
import image22 from './image22.png'
import image23 from './image23.png'
import image24 from './image24.png'
import image25 from './image25.png'

const boxes = ({tiny,icon,text}) => {
    return(
        <div className="boxes">
            <img className='upar' src={tiny}></img>
            <img className='cen' src={icon}></img>
            <p src={text}></p>
        </div>
    );
}

export default boxes;
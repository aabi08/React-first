import React from 'react'
import './content.css'
import hi from './Screenshot 2024-05-16 122522.png'
import lbox from './Screenshot 2024-05-16 124911.png'
import rbox from './Screenshot 2024-05-16 125006.png'
import Botbox from './botbox.js'
import licon from './Screenshot 2024-05-16 125829.png'
import ricon from './Screenshot 2024-05-16 125849.png'
import Image7 from './image7.png'

const box= () => {

    return (
        <div className='cbox-container'>
        <div className="cbox">
            <div className="top">
                <div className='hi'>
            <img src={hi}></img>    
            <p>Create your dataflow</p>
             </div>
            <img src={Image7} className='bimg'></img>
            
            </div>
            <div className="bot">
            <Botbox className="bot" url={lbox} title="Start from scratch" description="Create a new
            data map workflow. Don't worry, we will guide you." icon={licon}></Botbox>
            <Botbox className="bot" url={rbox} title="Pre-defined Map" description="Use one of the 
            commonly used workflows from our repository" icon={ricon}> </Botbox>
            </div>
        </div>
        </div>
    );
}

export default box;
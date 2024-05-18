import React from 'react'
import './navbar2.css'
import image8 from './image8.png'
import image9 from './image9.png'
import image10 from './image10.png'
import image11 from './image11.png'

const navbar2 = () =>{
    return (

        <nav className="custom"> 
            <div className='icons'>
             <img className='img1' src={image8}></img>
            <div className='search'>
                <img className='img2' src={image9}></img>
                <p>
                  Search
                </p>
            </div>
             <img className='img1' src={image10}></img>
             <img className='img1' src= {image11}></img>
            </div>
        </nav>

    );
}

export default navbar2;

import './datamap.css'
import Boxes from './boxes.js'
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
import image26 from './image26.png'

const bar = () => {
    return (
        <div>
            <div className='searchbar'>
                <img src={image26}></img>
                <input type='text' placeholder='Search'></input>
                
            </div>
            <div className='tags'>
            <p>Procurement</p>
            <p>Risk</p>
            <p>Client Management</p>
            <p>Price</p>
            <p>Marketing</p>
            <p>Sales</p>
            <p>Savings</p>
            </div>
            <p>Internal data</p>
            <div className='row3'>
                <Boxes tiny={image13} icon={image14} text={"Vendor"}></Boxes>
                <Boxes tiny={image13} icon={image25} text="Risk Management"></Boxes>
                <Boxes tiny={image13} icon={image15} text="Contracts"></Boxes>
                <Boxes tiny={image13} icon={image16} text="Payment Invoices"></Boxes>
                
            </div>
            <div className='row3'>
            <Boxes tiny={image13} icon={image17} text="Vendor"></Boxes>
            <Boxes tiny={image13} icon={image18} text="Contracts"></Boxes>
            <Boxes tiny={image13} icon={image19} text="Risk Management"></Boxes>
            <Boxes tiny={image13} icon={image20} text="Savings Tracking"></Boxes>
            </div>
            <div className='row3'>
            <Boxes tiny={image13} icon={image21} text="Savings Tracking"></Boxes>
            <Boxes tiny={image13} icon={image22} text="Vendor"></Boxes>
            <Boxes tiny={image13} icon={image23} text="Invoices"></Boxes>
            <Boxes tiny={image13} icon={image24} text="Contracts"></Boxes>
            </div>
            <p></p>
            <div></div>
            <div></div>
        </div>
    );
}

export default bar;
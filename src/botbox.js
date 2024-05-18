
import './content.css'

const botbox = ({url,title,description,icon}) =>{
    return (
        <div className='box-container'>
            <img className='image' src={url}></img>
            <div className='row'><p> {title} </p>
            <img className='icon' src={icon}></img>
            </div>
            <p className='fo'>{description}</p>
        </div>
    );
}

export default botbox;
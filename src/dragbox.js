import db from './image12.png'

const dragbox= () => {
    return (
        <div className='dragbox'>
            <img src={db}></img>
            <p>Drag and drop data</p>
        </div>
    );
}

export default dragbox;
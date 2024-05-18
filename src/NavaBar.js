import React from 'react'
import "./NavBar.css"
import SenseCloudIcon from './Screenshot 2024-05-16 112121.png';
import DatamapIcon from './image1.png';
import DatasetsIcon from './image2.png';
import InsightsIcon from './image3.png';
import Icon1 from './image4.png';
import Icon2 from './image5.png';
import Icon3 from './image6.png';
import Icon0 from './image0.png';
import { Link } from "react-router-dom";

const NavBar= () => {
    return (<nav className="nav"> 
            
            <div className="navi"> 
            <Link className="zdiv" to="/">
            <img src={Icon0}></img>
            <p>SenseCloud</p>
            </Link>
            <div className="fdiv">
            <Link className="item" to="/datamap">
            <img src={DatamapIcon}></img>
            <p>Datamap</p>
            </Link>
            <div className="item">
            <img src={DatasetsIcon}></img>
            <p>Datasets</p>
            </div>
            <div className="item">
            <img src={InsightsIcon}></img>
            <p>Insights</p>
            </div>
            </div>
            </div>
            <div className="profile">
                <img src={Icon1}></img>
                <img src={Icon2}></img>
                <img src={Icon3}></img>
            </div>
        </nav>

        );
};

export default NavBar;
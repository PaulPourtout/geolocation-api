import React from 'react';
// css
import './index.css';
// import static
import Pacman from "../../static/Pacman.gif";

const Loader = () => (
    <div className="loader-container">
        <img src={Pacman} alt="loader" />
    </div>
);

export default Loader;
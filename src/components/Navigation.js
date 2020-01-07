import React from 'react';
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation(){
    return(
        // a가 아닌 Link를 써야 전체 새로고침이 안되고 바뀐 내용만 변경된다. 
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    );
}

export default Navigation;
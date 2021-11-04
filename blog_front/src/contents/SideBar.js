import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <div id='nav'>
            <Link to= '/' style={{ textDecoration: "none" }}>
            <p className= "blog-title">운동하는 개발자</p>
            <p className= "blogger-name">성종현</p>
            </Link>
        </div>
    )
}

export default SideBar;
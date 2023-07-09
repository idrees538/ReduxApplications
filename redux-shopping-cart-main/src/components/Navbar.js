import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const items = useSelector((state) => state.cart);
    return ( <
        div style = {
            {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }
        } >
        <
        span > logo < /span> <
        link to = "Home" >
        HOme <
        /link> <
        link to = "Cart" > cart <
        /link>

        <
        /div> <
        /div>
    );
};

export default Navbar
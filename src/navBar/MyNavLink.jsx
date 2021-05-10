import React from 'react'
import {NavLink} from 'react-router-dom'

export default function MyNavLink(props) {
    //將外部所有屬性傳遞給NavLink
    return (
        <NavLink {...props} activeClassName="active"/>
    );
}

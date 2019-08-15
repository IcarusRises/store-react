import React from 'react'

import {Link} from 'react-router-dom';

const breadCrumbs = (props) => {
    return props.links.map(({to, label}) => 
        <li><Link to={to}>{label}</Link></li>    
    )
}

export default breadCrumbs

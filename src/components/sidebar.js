import React from 'react'
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Sidebar({ close, links }) {
    const Location = useLocation();
    return (
        <div className='sidebar' onClick={close}>
            {links.map(link => (
                <Link to={link.path} className={Location.pathname === link.path ? 'sidebar-link active' : 'sidebar-link'} key={link.name}>
                    <FontAwesomeIcon icon={link.icon} />
                    {link.name}
                </Link>
            ))}
        </div>
    )
}

export default Sidebar;
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { faHome, faList, faCog } from "@fortawesome/free-solid-svg-icons";

import Sidebar from "./sidebar";

export default function Navbar() {
    const [showSidebar, setShowSidebar] = useState(false);
    const Location = useLocation();
    const links = [
        {
            name: "Home",
            path: "/",
            icon: faHome
        },
        {
            name: "Recipes",
            path: "/recipes",
            icon: faList
        },
        {
            name: "Settings",
            path: "/settings",
            icon: faCog
        }
    ]

    function closeSidebar() {
        setShowSidebar(false)
    }
    return (
        <>
            <div className="navbar container">
                <Link to='/' className="logo">F<span>oo</span>diesHub</Link>
                <div className="nav-links">
                    {links.map(link => (
                        <Link className={Location.pathname === link.path ? "active" : ""} to={link.path} key={link.name}>{link.name}</Link>
                    ))}
                </div>
                <div onClick={() => setShowSidebar(true)} className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
            {showSidebar && <Sidebar close={() => closeSidebar()} links={links} />}
        </>
    )
}
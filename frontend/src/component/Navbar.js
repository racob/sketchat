import { useState } from "react";

const Navbar = (props) => {
    const [navIsActive, setNavIsActive] = useState(false);
    return(
        <nav className="navbar is-info" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a href="#" className="navbar-item">
                    <p className="title is-size-4 has-text-light">Room: {`${props.roomId.replace(/_/g,' ')}`}</p>
                </a>
                <a
                    role="button" 
                    className={`navbar-burger ${navIsActive ? "is-active" : ""}`}
                    aria-label="menu" 
                    aria-expanded="false"
                    onClick={() => {setNavIsActive(!navIsActive)}}
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="navMenu" className={`navbar-menu ${navIsActive ? "is-active" : ""}`}>
                <div className="navbar-end">
                    <a href="#" className="navbar-item">Nothing here yet</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
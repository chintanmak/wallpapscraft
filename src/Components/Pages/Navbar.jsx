import React from "react";
import '../Scss/style.scss';

function Navbar(){
    return(
        <>
            <div className="navbar-container">
                <div className="navbar-section">
                    <h1>
                        Wallpapscraft.
                    </h1>
                    <div className="navbar-menu">
                        <a className="active">Dashboard</a>
                        <a>Explore</a>
                        <a>Favorite</a>
                        <a>Payment</a>
                        <a>Wallpapers</a>
                        <a>Setting</a>

                    </div>
                </div>

            </div>
        </>
    );
}

export default Navbar;
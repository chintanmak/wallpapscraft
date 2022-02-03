import React from "react";
import '../Scss/style.scss';
import home from '../Assets/home.png';
import explore from '../Assets/explore.png';
import favorite from '../Assets/heart.png';
import payment from '../Assets/payment.png';
import wallpaper from '../Assets/wallpaper.png';
import setting from '../Assets/setting.png';
import logout from '../Assets/logout.png';

function Navbar(){
    return(
        <>
            <div className="navbar-container">
                <div className="navbar-section">
                    <h1>
                        Wallpapscraft.
                    </h1>
                    <div className="navbar-menu">
                        
                        <a className="active">
                        <img src={home} />
                        Dashboard
                        </a>
                        
                        <a>
                        <img src={explore} />
                        Explore
                        </a>

                        <a>
                        <img src={favorite} />
                        Favorite
                        </a>

                        <a>
                        <img src={payment} />
                        Payment
                        </a>

                        <a>
                        <img src={wallpaper} />
                        Wallpapers
                        </a>

                        <a>
                        <img src={setting} />
                        Setting
                        </a>

                    </div>
                    <div className="logout-btn">
                        <a>
                        <img src={logout} />
                        Logout
                        </a>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Navbar;
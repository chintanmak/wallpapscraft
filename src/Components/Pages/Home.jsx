import React from "react";
import '../Scss/style.scss';
import wall1 from '../Assets/fsociety.jfif';
import wall2 from '../Assets/mrrobot.jfif';
import wall3 from '../Assets/disobey.jpg';

function Home() {
    return(
        <>
            <div className="home-container">
                <div className="home-header">
                    <div className="home-names">
                        <h1>Hello, Chintan!</h1>
                        <p>Welcome back and explore the Illustrations.</p>
                    </div>
                    <div className="search-bar">
                        <input type='text' placeholder="Search" />

                    </div>
                </div>
                <div className="imgs-section">
                    <div className="img1">
                    <img src={wall1} />
                    </div>
                    <div className="img2">
                    <img src={wall2} />
                    </div>
                    <div className="img3">
                    <img src={wall3} />
                    </div>
                </div>

            <div className="below-full-section">

                <div className="wall-section2">

                    <div className="wall-lists">
                        <div className="list-header">
                           <h1>
                               Best Illustrations
                               <br />
                                <font>
                               Best seller in 2021
                                </font>
                           </h1>
                           
                        </div>   
                        <div className="list-prize">
                            <h3>
                                Fliter
                                </h3>   
                        </div>
                    </div>
                    <div className="wall-lists">
                        <div className="list-header">
                           <img src={wall1} />
                           <h2>
                               fsociety
                               <br />
                               <font>By mr.robot</font>
                           </h2>
                           
                        </div>   
                        <div className="list-prize">
                            <p>
                                $100
                            </p>   
                        </div>
                    </div>
                    <div className="wall-lists">
                        <div className="list-header">
                           <img src={wall2} />
                           <h2>
                                Mr. Robot
                               <br />
                               <font>By mr.robot</font>
                           </h2>
                           
                        </div>   
                        <div className="list-prize">
                            <p>
                                $70
                            </p>   
                        </div>
                    </div>
                    <div className="wall-lists">
                        <div className="list-header">
                           <img src={wall3} />
                           <h2>
                               Disobey
                               <br />
                               <font>By Hackers</font>
                           </h2>
                           
                        </div>   
                        <div className="list-prize">
                            <p>
                                $15
                            </p>   
                        </div>
                    </div>
                </div>

                <div className="wall-section3">
                    <div className="imgsec3">
                        <img src={wall2} />
                    </div>
                    <div className="btn-join">
                        <h1>
                            Join Now
                        </h1>
                    </div>
                </div>

                </div>
            </div>
        </>
    );
}

export default Home;
import React from 'react';
import profile from '../Assets/pic1.jpg';
import calender from '../Assets/calender.png';

import wall1 from '../Assets/fsociety.jfif';
import wall2 from '../Assets/mrrobot.jfif';
import wall3 from '../Assets/disobey.jpg';


function Sidebar() {
  return(
       <>
           <div className='sidebar-container'>
                <div className='account'>
                    <div className='ac-img'>
                         <img src={profile} />
                    </div>

                    <div className='ac-info'>
                    <h1>Chintan Makwana<br />
                    <font>Wallpaper Collector</font></h1>
                    </div>
                </div>

                <div className='calender'>
                    <img src={calender} />
                </div>

                <div className='bags'>
                    <h1>My Bag</h1>
                    <h1>...</h1>
                </div>

                <div className='baglist'>
                    <div className='listitem'>
                         <img src={wall1} />
                         <h1>
                              fsociety<br />
                              <font>
                                   By Mr.robot
                              </font>
                         </h1>
                    </div>
                </div>
                <br />
                <div className='baglist'>
                    <div className='listitem'>
                         <img src={wall2} />
                         <h1>
                              Mr. Robot<br />
                              <font>
                                   By Mr.robot
                              </font>
                         </h1>
                    </div>
                </div>
                <br />
                <div className='baglist'>
                    <div className='listitem'>
                         <img src={wall3} />
                         <h1>
                              Disobey<br />
                              <font>
                                   By Hackers
                              </font>
                         </h1>
                    </div>
                </div>
           </div>

       </>
  );
}

export default Sidebar;

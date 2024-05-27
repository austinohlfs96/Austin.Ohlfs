import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import { Segment, Image } from 'semantic-ui-react';
import Footer from './Footer';


const WorkExp = () => {

  return (
    <div>
      
      <section id="experience">
                <div className="container">
                  <h2>Work Experience</h2>
                  <div>
                  <h3>Charter Sports - Tune Shop Manager</h3>
            <Image src="https://thecharter.com/wp-content/uploads/2020/12/Charter-Sports-logo.jpg" size="small" />
            <ul>
              <li>Trained and managed staff to maintain rental and customer equipment (skis/snowboards/bikes)</li>
              <li>Ran and maintained shop machines and equipment</li>
            </ul>
                 
                 
                 
                   <h3>Ski Base - Tuner</h3>
                   <Image src="https://vailskibase.com/wp-content/uploads/2021/09/ski-base-logo-lg-1.jpg" size="small" />
                   <ul>
                     <li>Tuned, repaired, and mounted skis and snowboards for the shop and customers</li>
                     <li>Assisted with rentals and sales</li>
                   </ul>
                
                   <h3>Troon - Irrigation Crew</h3>
                   <Image src="https://www.troon.com/wp-content/uploads/2020/03/TG_Logo_PMS_7595-white.png" size="small" />
                   <ul>
                     <li>Identified and fixed irrigation problems for an 18-hole golf course</li>
                     <li>Assisted with mowing and turf crews when short-handed</li>
                   </ul>
               
                   <h3>Buzz’s Boards - Tuner</h3>
                   <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlm1Q0qI2ybEBa3BLzkQWSFmWzsXDhQNuop5PxSt0aQA&s" size="small" />
                   <ul>
                     <li>Tuned, repaired, and mounted skis and snowboards for the shop and customers</li>
                     <li>Performed high-end race tunes with specific hand-edged bevels</li>
                   </ul>
                
                   <h3>Vail Resorts - Customer Service/Rental Tech</h3>
                   <Image src="https://photos.prnewswire.com/prnfull/20160718/390690LOGO" size="small" />
                   <ul>
                     <li>Sized and fit customers with appropriate ski and snowboard equipment</li>
                     <li>Provided answers for any questions that the customer may have</li>
                   </ul>
                </div>
                </div>
              </section>
  
    </div>
    
  );
};

export default WorkExp;
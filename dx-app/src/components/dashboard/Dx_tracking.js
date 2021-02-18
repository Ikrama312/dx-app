import React from 'react';
import  'chart.js';
import user_avatar from '../../assets/img/man_pic.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {faStar } from '@fortawesome/free-solid-svg-icons';
function Dx_tracking() {
  return (
    <div className="w-100">
        <div className="card-cus-header text-center bg-cus-primary text-white">
            <p className="mb-0 text-uppercase">Live DX Tracking</p>
        </div>
        <div className="tracking-map">
            <iframe className="border-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26360909.888257876!2d-113.74875964478716!3d36.242299409623534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2s!4v1603705448362!5m2!1sen!2s" width="100%" height="250" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>
        <div className="d-flex align-items-center bg-white px-2">
            <div className="tracker-image">
                <img width="40px" height="40px" className="rounded-circle" src={user_avatar} />
            </div>
            <div className="user-info-rating">
                <p className="text-cus-primary pl-2 mb-0 font-700" style={{fontsize:14+"px"}}>John Doe</p>
                <div className="stars-ratings pl-2">
                    <FontAwesomeIcon className="active" icon={faStar} />
                    <FontAwesomeIcon className="active" icon={faStar} />
                    <FontAwesomeIcon className="active" icon={faStar} />
                    <FontAwesomeIcon className="active" icon={faStar} />
                    <FontAwesomeIcon  icon={faStar} />
                </div>
            </div>
            <div className="d-flex flex-wrap pl-2 mt-2" style={{flex:1}}>
                <div className="d-flex align-items-center">
                    <div className="company-image">
                        <img width="20px" className="rounded-circle" height="20px" src={user_avatar} />
                    </div> 
                    <div className="company-text pl-1">
                        <p className="mb-0">AutoNation INC,</p>
                    </div>
                </div>
                <div className="d-flex ml-auto align-items-center">
                    <div className="company-image">
                        <img width="20px" className="rounded-circle" height="20px" src={user_avatar} />
                    </div> 
                    <div className="company-text pl-1">
                        <p className="mb-0">NY Motors LLC,</p>
                    </div>
                </div>
                <div className="w-100 progress-bar-sec mt-2">
                    <div className="progress-route w-100">
                        <div className="progress-bar-width bg-cus-success" style={{width:30+"%"}}></div>
                    </div>
                    <div className="d-flex progress-label">
                        <span>6:39PM</span>
                        <span className="ml-auto">11:45PM</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  );
  
}

export default Dx_tracking;

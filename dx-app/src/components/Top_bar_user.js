import React from 'react';
import  'chart.js';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-daterangepicker/daterangepicker.css';
import user_img from '../assets/img/user_img.png';
function Top_bar_user(props) {
  return (
    <div className="w-100">
        <div className="d-flex flex-wrap">
            <div className="user-image">
              <div className="status-active position-relative">
                <img className="rounded-circle" src={props.useravatar !== null ? props.useravatar : user_img} width="65px" height="65px" />
              </div>
            </div> 
            <div className="user-info ml-4">
              <p className="mb-2 font-700">Hi <span className="text-capitalize"> , {props.username}</span></p>
              <h4>Welcome back!</h4>
            </div>
            <div className="ml-auto position-relative datepicker-wrap w-300">
              <DateRangePicker>
                <input type="text" className="input-date-design w-100" name="daterange"  readonly="true" />
              </DateRangePicker>
              <div className="position-absolute" style={{right:13+"px" , top:9+"px"}}>
                <i className="fa fa-calendar"></i>
              </div>
              <div className="position-absolute" style={{right:13+"px" , top:9+"px"}}>
                <i className="fa fa-angle-down"></i>
              </div>
            </div>
        </div>
    </div>
    
  );
  
}

export default Top_bar_user;

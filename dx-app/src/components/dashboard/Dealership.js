import React from 'react';
import  'chart.js';
import item_pic from '../../assets/img/car.png';
function Dealership() {
  return (
    <div className="w-100">
        <div className="card-cus-header text-center bg-cus-primary text-white">
            <p className="mb-0 text-uppercase">Top Dealerships</p>
        </div>
        <div className="bg-white py-2">
            <div className="top-deal-card p-1 bg-grey-c mb-3">
                <div className="car-avatar">
                    <img className="w-100 object-fit" height="80px" src={item_pic} />
                </div>
                <div className="car-detail">
                    <p className="mb-0 font-cus-size mt-1">Autoline Motors</p>
                    <span className="d-block font-10">1.6 Miles away</span>
                    <a href="#" className="view_car text-uppercase font-cus-size">View cars</a>
                </div>
            </div>
            <div className="top-deal-card p-1 bg-grey-c mb-3">
                <div className="car-avatar">
                    <img className="w-100 object-fit" height="80px" src={item_pic} />
                </div>
                <div className="car-detail">
                    <p className="mb-0 font-cus-size mt-1">Autoline Motors</p>
                    <span className="d-block font-10">1.6 Miles away</span>
                    <a href="#" className="view_car text-uppercase font-cus-size">View cars</a>
                </div>
            </div>
            <div className="top-deal-card p-1 bg-grey-c mb-3">
                <div className="car-avatar">
                    <img className="w-100 object-fit" height="80px" src={item_pic} />
                </div>
                <div className="car-detail">
                    <p className="mb-0 font-cus-size mt-1">Autoline Motors</p>
                    <span className="d-block font-10">1.6 Miles away</span>
                    <a href="#" className="view_car text-uppercase font-cus-size">View cars</a>
                </div>
            </div>
            <div className="top-deal-card p-1 bg-grey-c mb-3">
                <div className="car-avatar">
                    <img className="w-100 object-fit" height="80px" src={item_pic} />
                </div>
                <div className="car-detail">
                    <p className="mb-0 font-cus-size mt-1">Autoline Motors</p>
                    <span className="d-block font-10">1.6 Miles away</span>
                    <a href="#" className="view_car text-uppercase font-cus-size">View cars</a>
                </div>
            </div>
        </div>    
    </div>
    
  );
  
}

export default Dealership;

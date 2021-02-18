import React from 'react';
import  'chart.js';
import user_avatar from '../../assets/img/man_pic.jpg';
function Dx_to_track() {
  return (
    <div className="w-100">
        <div className="w-100 select-dx-track mt-3">
            <div className="dfx-selectors-list bg-white px-2 pb-2">
                <h5 className="text-cus-primary text-center mb-4 pt-3">Select DX to Track</h5>
                <div className="dfx-selectors mb-2 d-flex align-items-center">
                    <div className="dfx-selec-image">
                        <div className="status-active position-relative">
                            <img className="rounded-circle" width="55px" height="55px" src={user_avatar} />
                        </div>
                    </div>
                    <div className="selectors-info pl-3" style={{flex:1}}>
                        <h5 className="mb-0">John Doe</h5>
                        <div className="selectors-upper-info pl-3 position-relative">
                            <p className="mb-0">autonation INC <span className="company_name">(Embond.OK)</span></p>
                            <span className="bottom-detail">Lorem Ispum</span>
                        </div>
                        <div className="selectors-bottom-info mt-1 pl-3 position-relative">
                            <p className="mb-0">autonation INC <span className="company_name">(Embond.OK)</span></p>
                            <span className="bottom-detail">Lorem Ispum</span>
                        </div>
                    </div>
                    <div className="track-trigger">
                        <button type="button" className="active-track px-2">Tracking Now</button>
                    </div>
                </div>
                <div className="dfx-selectors d-flex mb-2 align-items-center">
                    <div className="dfx-selec-image">
                        <div className="status-active position-relative">
                            <img className="rounded-circle" width="55px" height="55px" src={user_avatar} />
                        </div>
                    </div>
                    <div className="selectors-info pl-3" style={{flex:1}}>
                        <h5 className="mb-0">John Doe</h5>
                        <div className="selectors-upper-info pl-3 position-relative">
                            <p className="mb-0">autonation INC <span className="company_name">(Embond.OK)</span></p>
                            <span className="bottom-detail">Lorem Ispum</span>
                        </div>
                        <div className="selectors-bottom-info mt-1 pl-3 position-relative">
                            <p className="mb-0">autonation INC <span className="company_name">(Embond.OK)</span></p>
                            <span className="bottom-detail">Lorem Ispum</span>
                        </div>
                    </div>
                    <div className="track-trigger">
                        <button type="button" className="not-active-track px-2">Track Now</button>
                    </div>
                </div>
            </div>
        </div> 
    </div>
  );
  
}

export default Dx_to_track;

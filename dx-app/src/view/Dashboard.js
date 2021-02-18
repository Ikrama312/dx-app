import React from 'react';
import Top_bar_user from '../components/Top_bar_user';
import Chart_1 from '../components/dashboard/Chart_1';
import Chart_2 from '../components/dashboard/Chart_2';
import Top_users from '../components/dashboard/Top_users';
import Dx_tracking from '../components/dashboard/Dx_tracking';
import Dx_to_track from '../components/dashboard/Dx_to_track';
import Dealership from '../components/dashboard/Dealership';
function Dashboard(props) {
  return (
    <section className="site-main-wrapper pt-66 pb-5">
      <div className="row pl-mdnav-cus mx-0">
        <div className="col-12 my-3">
          <Top_bar_user username={props.username} useravatar={props.useravatar} />
        </div>
        <div className="col-lg-6 row mx-0 px-0">
          <Chart_1 />
          <Chart_2 />
          <Top_users />
        </div>
        <div className="col-lg-4">
          <Dx_tracking />
          <Dx_to_track />
        </div>
        <div className="col-lg-2">
          <Dealership />
        </div>
      </div>
    </section>
  );
}
   
export default Dashboard;

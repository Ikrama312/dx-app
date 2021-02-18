import React from 'react';
import Pages from '../components/Pages';
import Top_users from '../components/dashboard/Top_users';
import User_profile from '../components/user_management/User_profile';
import Total_charts from '../components/user_management/Total_charts';
function User_management() {
  return (
    <section className="w-100">
        <Pages />
        <div className="row pl-mdnav-cus mx-0">
            <div class="chat-header col-12">
                <h3 class="text-cus-primary pt-4">User Management</h3>
            </div>
            <div className="col-md-5">
                <Top_users />
            </div>
            <div className="col-md-7">
                <User_profile />
                <Total_charts />
            </div>
        </div>
    </section>
  );
}
   
export default User_management;

import React from 'react';
import DataTable, { createTheme } from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import Services from '../../services'
const data = []  
export default class Order_list extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            table_data : []
        }
    }  
    async componentDidMount(){
        Services.admin.getorder().then(response => {
            const json = response.data;
            this.setState({
                table_data : json
            })
            console.log(data);
        })
    }
   render(){
    const columns = [
        {
          name: "DX ID",
          selector: "dealer.id",
          sortable: true
        },
        {
          name: "From Driver",
          selector: "dealer.fullName",
          sortable: true
        },
        {
            name: "Email",
            selector: "dealer.email",
            sortable: true
        },
        {
            name: "PhoneNumber",
            selector: "dealer.email",
            sortable: true
        },
        {
            name: "Bio",
            selector: "dealer.bio",
            sortable: true
        },
        {
            name: "Start Time",
            selector: "dealer.workStartTime",
            sortable: true
        },
        {
            name: "End Time",
            selector: "dealer.workEndTime",
            sortable: true
        },
        

      ];
       return(
        <section className="site-main-wrapper pt-66 pb-5">
           <div className="w-100 pl-mdnav-cus mx-0">
                <div class="chat-header col-12">
                    <h3 class="text-cus-primary pt-4 px-4">Business Management</h3>
                </div>
                <div class="main-wrap-order px-5">
                <DataTableExtensions
                    columns={columns}
                    data={this.state.table_data}>
                    <DataTable
                        noHeader
                        defaultSortField="id"
                        defaultSortAsc={false}
                        pagination
                        highlightOnHover
                    />
                </DataTableExtensions>
                </div>
            </div>
        </section>   
        )
    }
}
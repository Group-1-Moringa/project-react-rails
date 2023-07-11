import React from 'react'
import PhoneList from './PhoneList'
import NewData from './NewData'

function Main({
    customers,
    phones,
    allitems,
    onPhoneDelete,
    onUpdatePhone,
    onAddPhone,
    calculations

  }) {
    

    const {   total_buying_price,
      total_selling_price,
      total_profit,
      today_total_profit,
      total_quantity,
      today_total_quantity} = calculations
  return (
    <div className="content ">
        
    <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col-lg-7 col-md-12">
            <div className="card widget h-100">
                <div className="card-header d-flex">
                    <h6 className="card-title">
                        Student Portal
                        <a href="#" className="bi bi-question-circle ms-1 small" data-bs-toggle="tooltip"
                           title="Daily orders and sales"></a>
                    </h6>
                    <div className="d-flex gap-3 align-items-center ms-auto">
                        <div className="dropdown">
                            <a href="#" data-bs-toggle="dropdown" className="btn btn-sm" aria-haspopup="true"
                               aria-expanded="false">
                                <i className="bi bi-three-dots"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end">
                                <a href="#" className="dropdown-item">View Detail</a>
                                <a href="#" className="dropdown-item">Download</a>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
 
     <NewData  phones = {phones} customers = {customers} allitems={allitems}/>
      
  
    

    </div>

    </div>
  )
}

export default Main
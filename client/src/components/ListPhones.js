import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

function ListPhones({phones}) {
    const [search, setSearch] = useState("");
    const displayedPhones = phones.filter((phone) =>
    phone.name.toLowerCase().includes(search.toLowerCase()) ||
    phone.brand.toLowerCase().includes(search.toLowerCase())  
  );

 

  return (
    <div className="content ">
        
    <div className="mb-4">
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <a href="#">
                        <i className="bi bi-globe2 small me-2"></i> Dashboard
                    </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">Orders</li>
            </ol>
        </nav>
    </div>

    <div className="card">
        <div className="card-body">
            <div className="d-md-flex gap-4 align-items-center">
                <div className="d-none d-md-flex">All Orders</div>
                <div className="d-md-flex gap-4 align-items-center">
                    <form className="mb-3 mb-md-0">
                        <div className="row g-3">
                            <div className="col-md-3">
                                <select className="form-select">
                                    <option>Sort by</option>
                                    <option value="desc">Desc</option>
                                    <option value="asc">Asc</option>
                                </select>
                            </div>
                            <div className="col-md-3">
                                <select className="form-select">
                                    <option value="10">10</option>
                                    <option value="20">20</option>
                                    <option value="30">30</option>
                                    <option value="40">40</option>
                                    <option value="50">50</option>
                                </select>
                            </div>
                            <div className="col-md-6">
                                <div className="input-group">
                                    <input
                                       type="text"
                                       name="search"
                                       className="form-control"
                                       placeholder="Search..."
                                       autoComplete="off"
                                       value={search}
                                       onChange={e => setSearch(e.target.value)}
                                      />


                                    
                                    <button className="btn btn-outline-light" type="button">
                                        <i className="bi bi-search"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="dropdown ms-auto">
                    <a href="#" data-bs-toggle="dropdown"
                       className="btn btn-primary dropdown-toggle"
                       aria-haspopup="true" aria-expanded="false">Actions</a>
                    <div className="dropdown-menu dropdown-menu-end">
                        <a href="#" className="dropdown-item">Action</a>
                        <a href="#" className="dropdown-item">Another action</a>
                        <a href="#" className="dropdown-item">Something else here</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="table-responsive">
        <table className="table table-custom table-lg mb-0" id="orders">
            <thead>
            <tr>
                <th>
                    <input className="form-check-input select-all" type="checkbox" data-select-all-target="#orders"
                           id="defaultCheck1" />
                </th>
                <th>ID</th>
                <th>Name</th>
                <th>Brand</th>
                <th>BuyingPrice</th>
                <th>SellingPrice</th>
                <th>Quantity</th>
                <th>Date Created</th>
                <th className="text-end">Actions</th>
            </tr>
            </thead>
            <tbody>


            {displayedPhones.map((phone) => {
                
                function handleDeleteClick() {
                    fetch(`http://localhost:9292/phones/${phone.id}`, {
                      method: "DELETE",
                    });
                  }
                return(

<tr key={phone.id}>
                <td>
                    <input className="form-check-input" type="checkbox" />
                </td>
                <td>
                <a href="#">#{phone.id}</a>
                </td>
                <td>{phone.name}</td>
                <td>{phone.brand}</td>
                <td>Ksh {phone.buying_price}</td>
                <td>Ksh {phone.selling_price}</td>
                <td>{phone.quantity}</td>
                <td>{phone.orders}</td>
                <td>{phone.created_at}</td>

                <td className="text-end">
                    <div className="d-flex">
                        <div className="dropdown ms-auto">
                            <a href="#" data-bs-toggle="dropdown"
                               className="btn btn-floating"
                               aria-haspopup="true" aria-expanded="false">
                                <i className="bi bi-three-dots"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end">

                                    <NavLink className="dropdown-item" to={`/phone/${phone.id}` }>VIEW</NavLink>{" "}
                                    <span className="dropdown-item" onClick={handleDeleteClick}>DELETE</span>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>

      )})}



            
          
            </tbody>
        </table>
    </div>

    <nav className="mt-4" aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
            <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
            <li className="page-item active"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        </ul>
    </nav>

    </div>
  )
}

export default ListPhones
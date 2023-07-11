import React from 'react'
import { NavLink } from 'react-router-dom';

function PhoneList({phone,onPhoneDelete,onUpdatePhone}) {

  const { id, name, brand,  buying_price, selling_price} = phone;


  function handleDeleteClick() {
    fetch(`http://localhost:9292/phones/${id}`, {
      method: "DELETE",
    });

    onPhoneDelete(id);
  }


    return (
  
    <tr>
    <td>
        <input className="form-check-input" type="checkbox" />
    </td>
    <td>
        <span className="text-info">#{id}</span>
    </td>
    <td>
        <span className="text-success">{name}</span>
    </td>
    <td>
        <span className="text-danger">{brand}</span>
    </td>
    <td>Ksh {buying_price}</td>
    <td>Ksh {selling_price}</td>
    <td>Ksh {selling_price - buying_price}</td>


    <td className="text-end">
        <div className="d-flex">
            <div className="dropdown ms-auto">
                <a href="#" data-bs-toggle="dropdown"
                   className="btn btn-floating"
                   aria-haspopup="true" aria-expanded="false">
                    <i className="bi bi-three-dots"></i>
                </a>
                <div className="dropdown-menu dropdown-menu-end">
                    <NavLink className="dropdown-item" to={`/phone/${id}` }>VIEW</NavLink>{" "}
                    <span className="dropdown-item" onClick={handleDeleteClick}>DELETE</span>
                </div>
            </div>
        </div>
    </td>
</tr>
  )
}

export default PhoneList
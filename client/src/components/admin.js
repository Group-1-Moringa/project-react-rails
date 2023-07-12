import React, { useState } from 'react'

function Admin({phones, customers, allitems}) {
      
        const [productData, setProductData] = useState({
          name: '',
          brand: '',
          itemtype: ''
        });
    
        const handleProductInputChange = (e) => {
          setProductData({ ...productData, [e.target.name]: e.target.value });
        };
      
        const handleProductFormSubmit = (e) => {
          e.preventDefault();
          if (productData.name && productData.brand && productData.itemtype) {
            fetch('http://localhost:9292/allitems', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(productData)
            })
              .then(response => response.json())
              .then(data => {
                console.log('Product data posted successfully:', data);
                setProductData({
                    name: '',
                    brand: '',
                    itemtype: ''
                });
              })
              .catch(error => {
                console.error('Error posting product data:', error);
              });
          }
        };
    
  return (
    <>
      <div className="content ">
        
        <div className="row row-cols-1 row-cols-md-3 g-4">
 
  
    <div className="col-lg-6 col-md-12">
      <div className="card h-100">
        <div className="card-body">
          <div className="d-flex mb-3">
            <div className="display-7">
              <i className="bi bi-person-badge"></i>
            </div>
            <div className="dropdown ms-auto">
              <a
                href="#"
                data-bs-toggle="dropdown"
                className="btn btn-sm"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="bi bi-three-dots"></i>
              </a>
              <div className="dropdown-menu dropdown-menu-end">
                <a href="#" className="dropdown-item">
                  View Detail
                </a>
                <a href="#" className="dropdown-item">
                  Download
                </a>
              </div>
            </div>
          </div>
          {/* ADD CUSTOMER */}
          <h4 className="mb-3">Add All Items</h4>
          <div className="d-flex mb-3">
            <form className="mb-5" onSubmit={handleProductFormSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Name"
                  name="name"
                  value={productData.name}
                  onChange={handleProductInputChange}
                  autoFocus
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Phone"
                  name="brand"
                  value={productData.brand}
                  onChange={handleProductInputChange}
                  required
                />
              </div>
              <div className="mb-3">
            <select class="form-select" aria-label="Default select example"
                name="itemtype"
                value={productData.itemtype}
                onChange={handleProductInputChange}
                required
                >
                <option selected>select type</option>
                <option value="phone">Phone</option>
                <option value="accessory">Accessory</option>
            </select>

              </div>
              <div className="text-center text-lg-start">
                <button type="submit" className="btn btn-primary">
                  Add
                </button>
              </div>
            </form>
          </div>
          <div className="text-success">
            Over the last month 1.4%{" "}
            <i className="small bi bi-arrow-up"></i>
          </div>
        </div>
      </div>
    </div>

    </div></div>
  </>
  )
}

export default Admin
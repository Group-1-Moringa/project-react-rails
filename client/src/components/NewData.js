import React, { useState } from 'react';

function NewData({ phones, customers, allitems }) {
  const [orderData, setOrderData] = useState({
    phone_id: '',
    customer_id: '',
    quantity_sold: '',
    selling_price: ''
  });

  const [phoneData, setPhoneData] = useState({
    select_id: '',
    allitem_id: '',
    quantityAvailable: '',
    buyingPrice: '',
    sellingPrice: ''
  });

  const [productData, setProductData] = useState({
    name: '',
    phone: '',
    email: 'Enter email'
  });

  const handlePhoneInputChange = (e) => {
    setPhoneData({ ...phoneData, [e.target.name]: e.target.value });
  };

  const handleProductInputChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const handleOrderInputChange = (e) => {
    setOrderData({ ...orderData, [e.target.name]: e.target.value });
  };

  const handleOrderFormSubmit = (e) => {
    e.preventDefault();
    if (
      orderData.customer_id &&
      orderData.phone_id &&
      orderData.quantity_sold &&
      orderData.selling_price
    ) {
      fetch('http://localhost:9292/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderData)
      })
        .then(response => response.json())
        .then(data => {
          console.log('Order data posted successfully:', data);
          setOrderData({
            phone_id: '',
            customer_id: '',
            quantity_sold: '',
            selling_price: ''
          });
        })
        .catch(error => {
          console.error('Error posting order data:', error);
        });
    }
  };

  const handlePhoneFormSubmit = (e) => {
    e.preventDefault();
    if (
      // phoneData.allitem_id &&
      // phoneData.quantityAvailable &&
      // phoneData.buyingPrice &&
      phoneData.sellingPrice
    ) {
      fetch('http://localhost:9292/phones', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(phoneData)
      })
        .then(response => response.json())
        .then(data => {
          console.log('Phone data posted successfully:', data);
          setPhoneData({
            select_id: '',
            allitem_id: '',
            quantityAvailable: '',
            buyingPrice: '',
            sellingPrice: ''
          });
        })
        .catch(error => {
          console.error('Error posting phone data:', error);
        });
    }
  };
  
  const handlePhoneSelectChange = (e) => {
    const selectedPhoneId = e.target.value;
    const selectedPhone = phones.find(phone => phone.id === parseInt(selectedPhoneId));
    if (selectedPhone) {
      setPhoneData({
        ...phoneData,
        select_id: selectedPhoneId,
        allitem_id: selectedPhoneId,
        quantityAvailable: selectedPhone.quantity,
        buyingPrice: selectedPhone.buying_price,
        sellingPrice: selectedPhone.selling_price
      });
    }else{
      setPhoneData({
        ...phoneData,
        select_id: selectedPhoneId,
        allitem_id: selectedPhoneId,
        quantityAvailable: 0,
        buyingPrice: 0,
        sellingPrice: 0
      });
    }
  };
  const handleProductFormSubmit = (e) => {
    e.preventDefault();
    if (productData.name && productData.phone && productData.email) {
      fetch('http://localhost:9292/customers', {
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
            phone: '',
            email: ''
          });
        })
        .catch(error => {
          console.error('Error posting product data:', error);
        });
    }
  };

  return (
    <>
 
      <div className="col-lg-6 col-md-12">
        <div className="card h-100">
          <div className="card-body">
            <div className="d-flex mb-3">
              <div className="display-7">
                <i className="bi bi-phone"></i>
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
            {/* ADD PHONE */}
            <h4 className="mb-3">Login</h4>
            <div className="d-flex mb-3">
              <form className="mb-5" onSubmit={handlePhoneFormSubmit}>
                <div className="mb-3">

                </div>
             


          
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Username"
                    name="buyingPrice"
                    value={phoneData.buyingPrice}
                    onChange={handlePhoneInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Password"
                    name="sellingPrice"
                    value={phoneData.sellingPrice}
                    onChange={handlePhoneInputChange}
                    required
                  />
                </div>
                <div className="text-center text-lg-start">
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </div>
              </form>
            </div>
        
          </div>
        </div>
      </div>
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
            <h4 className="mb-3">Register</h4>
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
                    name="phone"
                    value={productData.phone}
                    onChange={handleProductInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Email"
                    name="email"
                    value={productData.email}
                    onChange={handleProductInputChange}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Password"
                    name="phone"
                    value={productData.phone}
                    onChange={handleProductInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Confirm Password"
                    name="phone"
                    value={productData.phone}
                    onChange={handleProductInputChange}
                    required
                  />
                </div>
                <div className="text-center text-lg-start">
                  <button type="submit" className="btn btn-primary">
                    Register
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
    </>
  );
}

export default NewData;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Phone({ allphones }) {
    const { id } = useParams();

    const [phoneData, setPhoneData] = useState({
      allitem_id: '',
      quantityAvailable: '',
      buyingPrice: '',
      sellingPrice: ''
    });
  
    useEffect(() => {
      const phones = allphones.filter((phone) => phone.id == id);
      if (phones.length > 0) {
        const { allitem_id } = phones[0];
        setPhoneData((prevState) => ({
          ...prevState,
          allitem_id: allitem_id
        }));
      }
    }, [allphones, id]);
  
    const handlePhoneInputChange = (e) => {
      if (e.target.name === 'allitem_id') {
        setPhoneData((prevState) => ({
          ...prevState,
          allitem_id: e.target.value
        }));
      } else {
        setPhoneData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value
        }));
      }
    };
  
    const handlePhoneFormSubmit = (e) => {
      e.preventDefault();
      if (
        phoneData.quantityAvailable &&
        phoneData.buyingPrice &&
        phoneData.sellingPrice
      ) {
        fetch(`http://localhost:9292/phones/${id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(phoneData)
        })
          .then((response) => response.json())
          .then((data) => {
            console.log('Phone data posted successfully:', data);
            setPhoneData({
              allitem_id: '',
              quantityAvailable: '',
              buyingPrice: '',
              sellingPrice: ''
            });
          })
          .catch((error) => {
            console.error('Error posting phone data:', error);
          });
      }
    };
    const phones = allphones.filter((phone) => phone.id == id);
  
    if (phones.length === 0) {
      // Handle the case when the phone is not found
      return <div>Loading ....</div>;
    }
  
    const { name, brand, quantity, buying_price, selling_price , allitem_id} = phones[0];
  
  return (
    <div className="content">
      <div className="mb-4">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">
                <i className="bi bi-globe2 small me-2"></i> Dashboard
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Checkout
            </li>
          </ol>
        </nav>
      </div>

      <div className="row">
        <div className="col-md-8">
          <div id="checkout-form-wizard">
            <h3>Phone ({name})</h3>
            <ul></ul>
            <section className="card card-body mb-0">
              <div className="mb-4">
                <h6 className="card-title mb-3">Update Phone</h6>
                <div className="text-muted">Enter New Details to Update</div>
              </div>
              <form className="mb-5" onSubmit={handlePhoneFormSubmit}>
                <input
                  type="hidden"
                  className="form-control"
                  name="allitem_id"
                  value={allitem_id}
                  onChange={handlePhoneInputChange}
                  autoFocus
                  required
                />
                <div className="mb-3">
                  <label className="form-label">Quantity Available</label>
                  <input
                    type="number"
                    className="form-control"
                    name="quantityAvailable"
                    value={phoneData.quantityAvailable}
                    onChange={handlePhoneInputChange}
                    autoFocus
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Buying Price</label>
                  <input
                    type="number"
                    className="form-control"
                    name="buyingPrice"
                    value={phoneData.buyingPrice}
                    onChange={handlePhoneInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Selling Price</label>
                  <input
                    type="number"
                    className="form-control"
                    name="sellingPrice"
                    value={phoneData.sellingPrice}
                    onChange={handlePhoneInputChange}
                    required
                  />
                </div>
                <div className="text-center text-lg-start">
                  <button type="submit" className="btn btn-primary">
                    Update
                  </button>
                </div>
              </form>
            </section>
          </div>
        </div>
        <div className="col-md-4">
          <h5 className="mb-4">Phone Details</h5>
          <div className="card mb-4">
            <div className="card-body">
              <h6 className="card-title mb-4">{name}</h6>
              <div className="list-group list-group-flush">
                <div className="list-group-item d-flex px-0">
                  <div>
                    <h6>Brand</h6>
                  </div>
                  <div className="text-end ms-auto">{brand}</div>
                </div>
              </div>
              <div className="list-group list-group-flush">
                <div className="list-group-item d-flex px-0">
                  <div>
                    <h6>Quantity</h6>
                  </div>
                  <div className="text-end ms-auto">{quantity} pcs</div>
                </div>
              </div>
              <div className="list-group list-group-flush">
                <div className="list-group-item d-flex px-0">
                  <div>
                    <h6>BuyingPrice</h6>
                  </div>
                  <div className="text-end ms-auto">Ksh {buying_price}</div>
                </div>
              </div>
              <div className="list-group list-group-flush">
                <div className="list-group-item d-flex px-0">
                  <div>
                    <h6>SellingPrice</h6>
                  </div>
                  <div className="text-end ms-auto">Ksh {selling_price}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-4">
            <div className="card-body">
              <h6 className="card-title mb-4">Profit</h6>
              <div className="row justify-content-center mb-3">
                <div className="col-4 text-end">Sub Total :</div>
                <div className="col-4">Ksh {selling_price - buying_price}</div>
              </div>
              <div className="row justify-content-center mb-3">
                <div className="col-4 text-end">Shipping :</div>
                <div className="col-4">Free</div>
              </div>
              <div className="row justify-content-center mb-3">
                <div className="col-4 text-end">Tax(16%) :</div>
                <div className="col-4">
                  Ksh {(selling_price - buying_price) * 0.16}
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-4 text-end">
                  <strong>Total :</strong>
                </div>
                <div className="col-4">
                  <strong>
                    Ksh{' '}
                    {(selling_price - buying_price) -
                      ((selling_price - buying_price) * 0.16)}
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Phone;
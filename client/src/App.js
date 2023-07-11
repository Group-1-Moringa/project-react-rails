import "./App.css";
import SideBar from "./components/SideBar";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Order from "./components/Order";
import Phone from "./components/Phone";
import ListPhones from "./components/ListPhones";
import ListCustomers from "./components/ListCustomers";
import ListOrders from "./components/ListOrders";
import ListItems from "./components/ListItems";
import Admin from "./components/admin";

function App() {
  const [allItems, setAllItems] = useState([]);

    const [phones, setphones] = useState([]);
    const [orders, setorders] = useState([]);
    const [customers, setcustomers] = useState([]);
    const [search, setSearch] = useState("");
  
    const [calculations, setCalculations] = useState([]);

    useEffect(() => {
      fetch("http://localhost:3000/phones")
        .then((r) => r.json())
        .then((phones) => setphones(phones));
    }, []);
  
    function handleAddphone(newPhone) {
      setphones([...phones, newPhone]);
    }
  
    useEffect(() => {
      fetch("http://localhost:3000/students")
        .then((r) => r.json())
        .then((orders) => setorders(orders));
    }, []);
    useEffect(() => {
      fetch("http://localhost:3000/courses")
        .then((r) => r.json())
        .then((customers) => setcustomers(customers));
    }, []);
    useEffect(() => {
      fetch("http://localhost:3000/instructors")
        .then((r) => r.json())
        .then((allitems) => setAllItems(allitems));
    }, []);


    useEffect(() => {
      fetch("http://localhost:3000/calculations")
        .then((r) => r.json())
        .then((calculations) => setCalculations(calculations));
    }, []);


    function handleDeletePhone(id) {
      const updatedphones = phones.filter((phone) => phone.id !== id);
      setphones(updatedphones);
    }
  
    function handleUpdatePhone(updatedphoneObj) {
      const updatedphones = phones.map((phone) => {
        if (phone.id === updatedphoneObj.id) {
          return updatedphoneObj;
        } else {
          return phone;
        }
      });
      setphones(updatedphones);
    }
  
    // const displayedPhones = phones.filter((phone) =>
    //   phone.name.toLowerCase().includes(search.toLowerCase())
    // );





  return (
    <>
      <SideBar search={search} onSearchChange={setSearch} />
      <div className="layout-wrapper">
        <Navbar />

       

<Routes>
<Route path="/" element={ <Main  calculations ={calculations}  phones={phones}  customers={customers} orders={orders} allitems={allItems}
        onPhoneDelete={handleDeletePhone}
        onUpdatePhone={handleUpdatePhone}
        onAddPhone = {handleAddphone}

      />} />
             
              {/* <Route path="/phone/:id" element={<Phone allphones={displayedPhones} />} /> */}
              {/* <Route path="/phones" element={<ListPhones phones={displayedPhones} />} /> */}
              <Route path="/courses" element={<ListCustomers courses={customers} />} />
              <Route path="/students" element={<ListOrders students={orders} />} />
              <Route path="/instructors" element={<ListItems instructors={allItems} />} />
              {/* <Route path="/admin" element={<Admin phones={phones}  customers={customers} orders={orders} allitems={allItems} />} /> */}

            </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;

import React from 'react'
import { NavLink } from 'react-router-dom'

function SideBar() {
  return (
<>
<div className="sidebar" id="notifications">
    <div className="sidebar-header d-block align-items-end">
        <div className="align-items-center d-flex justify-content-between py-4">
            Notifications
            <button data-sidebar-close>
                <i className="bi bi-arrow-right"></i>
            </button>
        </div>
        <ul className="nav nav-pills">
            <li className="nav-item">
                <a className="nav-link active nav-link-notify" data-bs-toggle="tab" href="#activities">Activities</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#notes">Notes</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#alerts">Alerts</a>
            </li>
        </ul>
    </div>
    <div className="sidebar-content">
        <div className="tab-content">
            <div className="tab-pane active" id="activities">
                <div className="tab-pane-body">
                    <ul className="list-group list-group-flush">
                        <li className="px-0 list-group-item">
                            <a href="#" className="d-flex">
                                <div className="flex-shrink-0">
                                    <figure className="avatar avatar-info me-3">
                                            <span className="avatar-text rounded-circle">
                                                <i className="bi bi-person"></i>
                                            </span>
                                    </figure>
                                </div>
                                <div className="flex-grow-1">
                                    <p className="mb-0 fw-bold d-flex justify-content-between">
                                        You joined a group
                                    </p>
                                    <span className="text-muted small">
                                        <i className="bi bi-clock me-1"></i> Today
                                    </span>
                                </div>
                            </a>
                        </li>
                        <li className="px-0 list-group-item">
                            <a href="#" className="d-flex">
                                <div className="flex-shrink-0">
                                    <figure className="avatar avatar-warning me-3">
                                            <span className="avatar-text rounded-circle">
                                                <i className="bi bi-hdd"></i>
                                            </span>
                                    </figure>
                                </div>
                                <div className="flex-grow-1">
                                    <p className="mb-0 fw-bold d-flex justify-content-between">
                                        Storage is running low!
                                    </p>
                                    <span className="text-muted small">
                                        <i className="bi bi-clock me-1"></i> Today
                                    </span>
                                </div>
                            </a>
                        </li>
                        <li className="px-0 list-group-item">
                            <a href="#" className="d-flex">
                                <div className="flex-shrink-0">
                                    <figure className="avatar avatar-secondary me-3">
                                            <span
                                                className="avatar-text rounded-circle">
                                                <i className="bi bi-file-text"></i>
                                            </span>
                                    </figure>
                                </div>
                                <div className="flex-grow-1">
                                    <p className="mb-0 d-flex justify-content-between">
                                        1 person sent a file
                                    </p>
                                    <span className="text-muted small">
                                        <i className="bi bi-clock me-1"></i> Yesterday
                                    </span>
                                </div>
                            </a>
                        </li>
                        <li className="px-0 list-group-item">
                            <a href="#" className="d-flex">
                                <div className="flex-shrink-0">
                                    <figure className="avatar avatar-success me-3">
                                            <span className="avatar-text rounded-circle">
                                                <i className="bi bi-download"></i>
                                            </span>
                                    </figure>
                                </div>
                                <div className="flex-grow-1">
                                    <p className="mb-0 d-flex justify-content-between">
                                        Reports ready to download
                                    </p>
                                    <span className="text-muted small">
                                        <i className="bi bi-clock me-1"></i> Yesterday
                                    </span>
                                </div>
                            </a>
                        </li>
                        <li className="px-0 list-group-item">
                            <a href="#" className="d-flex">
                                <div className="flex-shrink-0">
                                    <figure className="avatar avatar-info me-3">
                                            <span className="avatar-text rounded-circle">
                                                <i className="bi bi-lock"></i>
                                            </span>
                                    </figure>
                                </div>
                                <div className="flex-grow-1">
                                    <p className="mb-0 d-flex justify-content-between">
                                        2 steps verification
                                    </p>
                                    <span className="text-muted small">
                                        <i className="bi bi-clock me-1"></i> 20 min ago
                                    </span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="tab-pane-footer">
                    <a href="#" className="btn btn-success">
                        <i className="bi bi-check2 me-2"></i> Make All Read
                    </a>
                    <a href="#" className="btn btn-danger ms-2">
                        <i className="bi bi-trash me-2"></i> Delete all
                    </a>
                </div>
            </div>
            <div className="tab-pane" id="notes">
                <div className="tab-pane-body">
                    <ul className="list-group list-group-flush">
                        <li className="px-0 list-group-item">
                            <p className="mb-0 fw-bold text-success d-flex justify-content-between">
                                This month's report will be prepared.
                            </p>
                            <span className="text-muted small">
                                <i className="bi bi-clock me-1"></i> Today
                            </span>
                            <div className="mt-2">
                                <a href="#">Edit</a>
                                <a href="#" className="text-danger ms-2">Delete</a>
                            </div>
                        </li>
                        <li className="px-0 list-group-item">
                            <p className="mb-0 fw-bold text-success d-flex justify-content-between">
                                An email will be sent to the customer.
                            </p>
                            <span className="text-muted small">
                                <i className="bi bi-clock me-1"></i> Today
                            </span>
                            <div className="mt-2">
                                <a href="#">Edit</a>
                                <a href="#" className="text-danger ms-2">Delete</a>
                            </div>
                        </li>
                        <li className="px-0 list-group-item">
                            <p className="mb-0 d-flex justify-content-between">
                                The meeting will be held.
                            </p>
                            <span className="text-muted small">
                                <i className="bi bi-clock me-1"></i> Yesterday
                            </span>
                            <div className="mt-2">
                                <a href="#">Edit</a>
                                <a href="#" className="text-danger ms-2">Delete</a>
                            </div>
                        </li>
                        <li className="px-0 list-group-item">
                            <p className="mb-0 fw-bold text-success d-flex justify-content-between">
                                Conversation with users.
                            </p>
                            <span className="text-muted small">
                                <i className="bi bi-clock me-1"></i> Yesterday
                            </span>
                            <div className="mt-2">
                                <a href="#">Edit</a>
                                <a href="#" className="text-danger ms-2">Delete</a>
                            </div>
                        </li>
                        <li className="px-0 list-group-item">
                            <p className="mb-0 fw-bold text-warning d-flex justify-content-between">
                                Payment refund will be made to the customer.
                            </p>
                            <span className="text-muted small">
                                <i className="bi bi-clock me-1"></i> 20 min ago
                            </span>
                            <div className="mt-2">
                                <a href="#">Edit</a>
                                <a href="#" className="text-danger ms-2">Delete</a>
                            </div>
                        </li>
                        <li className="px-0 list-group-item">
                            <p className="mb-0 d-flex justify-content-between">
                                Payment form will be activated.
                            </p>
                            <span className="text-muted small">
                                <i className="bi bi-clock me-1"></i> 20 min ago
                            </span>
                            <div className="mt-2">
                                <a href="#">Edit</a>
                                <a href="#" className="text-danger ms-2">Delete</a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="tab-pane-footer">
                    <a href="#" className="btn btn-primary btn-block">
                        <i className="bi bi-plus me-2"></i> Add Notes
                    </a>
                </div>
            </div>
            <div className="tab-pane" id="alerts">
                <div className="tab-pane-body">
                    <ul className="list-group list-group-flush">
                        <li className="px-0 list-group-item d-flex">
                            <div className="flex-shrink-0">
                                <figure className="avatar avatar-warning me-3">
                                        <span className="avatar-text rounded-circle">
                                            <i className="bi bi-lock"></i>
                                        </span>
                                </figure>
                            </div>
                            <div className="flex-grow-1">
                                <p className="mb-0 fw-bold d-flex justify-content-between">
                                    Signed in with a different device.
                                </p>
                                <span className="text-muted small">
                                        <i className="bi bi-clock me-1"></i> Yesterday
                                    </span>
                            </div>
                        </li>
                        <li className="px-0 list-group-item d-flex">
                            <div className="flex-shrink-0">
                                <figure className="avatar avatar-warning me-3">
                                        <span className="avatar-text fw-bold rounded-circle">
                                            <i className="bi bi-file-text"></i>
                                        </span>
                                </figure>
                            </div>
                            <div className="flex-grow-1">
                                <p className="mb-0 fw-bold d-flex justify-content-between">
                                    Your billing information is not active.
                                </p>
                                <span className="text-muted small">
                                        <i className="bi bi-clock me-1"></i> Yesterday
                                    </span>
                            </div>
                        </li>
                        <li className="px-0 list-group-item d-flex">
                            <div className="flex-shrink-0">
                                <figure className="avatar avatar-warning me-3">
                                        <span className="avatar-text rounded-circle">
                                            <i className="bi bi-person"></i>
                                        </span>
                                </figure>
                            </div>
                            <div className="flex-grow-1">
                                <p className="mb-0 d-flex justify-content-between">
                                    Your subscription has expired.
                                </p>
                                <span className="text-muted small">
                                        <i className="bi bi-clock me-1"></i> Today
                                    </span>
                            </div>
                        </li>
                        <li className="px-0 list-group-item d-flex">
                            <div className="flex-shrink-0">
                                <figure className="avatar avatar-warning me-3">
                                        <span className="avatar-text rounded-circle">
                                            <i className="bi bi-hdd"></i>
                                        </span>
                                </figure>
                            </div>
                            <div className="flex-grow-1">
                                <p className="mb-0 d-flex justify-content-between">
                                    Your storage space is running low
                                </p>
                                <span className="text-muted small">
                                        <i className="bi bi-clock me-1"></i> Today
                                    </span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="tab-pane-footer">
                    <a href="#" className="btn btn-success">
                        <i className="bi bi-check2 me-2"></i> Make All Read
                    </a>
                    <a href="#" className="btn btn-danger ms-2">
                        <i className="bi bi-trash me-2"></i> Delete all
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="sidebar" id="settings">
    <div className="sidebar-header">
        <div>
            <i className="bi bi-gear me-2"></i>
            Settings
        </div>
        <button data-sidebar-close>
            <i className="bi bi-arrow-right"></i>
        </button>
    </div>
    <div className="sidebar-content">
        <ul className="list-group list-group-flush">
            <li className="list-group-item px-0 border-0">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                    <label className="form-check-label" htmlFor="flexCheckDefault1">
                        Remember next visits
                    </label>
                </div>
            </li>
            <li className="list-group-item px-0 border-0">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2" />
                    <label className="form-check-label" htmlFor="flexCheckDefault2">
                        Enable report generation.
                    </label>
                </div>
            </li>
            <li className="list-group-item px-0 border-0">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault3" />
                    <label className="form-check-label" htmlFor="flexCheckDefault3">
                        Allow notifications.
                    </label>
                </div>
            </li>
            <li className="list-group-item px-0 border-0">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault4"/>
                    <label className="form-check-label" htmlFor="flexCheckDefault4">
                        Hide user requests
                    </label>
                </div>
            </li>
            <li className="list-group-item px-0 border-0">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault5" />
                    <label className="form-check-label" htmlFor="flexCheckDefault5">
                        Speed up demands
                    </label>
                </div>
            </li>
            <li className="list-group-item px-0 border-0">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Hide menus
                    </label>
                </div>
            </li>
        </ul>
    </div>
    <div className="sidebar-action">
        <a href="#" className="btn btn-primary">All Settings</a>
    </div>
</div>
<div className="sidebar" id="search">
    <div className="sidebar-header">
        Search
        <button data-sidebar-close>
            <i className="bi bi-arrow-right"></i>
        </button>
    </div>
    <div className="sidebar-content">
        <form className="mb-4">
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Search" aria-describedby="button-search-addon"/>
                <button className="btn btn-outline-light" type="button" id="button-search-addon">
                    <i className="bi bi-search"></i>
                </button>
            </div>
        </form>
        <h6 className="mb-3">Last searched</h6>
        <div className="mb-4">
            <div className="d-flex align-items-center mb-3">
                <a href="#" className="avatar avatar-sm me-3">
                        <span className="avatar-text rounded-circle">
                            <i className="bi bi-search"></i>
                        </span>
                </a>
                <a href="#" className="flex-fill">Reports for 2021</a>
                <a href="#" className="btn text-danger btn-sm" data-bs-toggle="tooltip" title="Remove">
                    <i className="bi bi-x"></i>
                </a>
            </div>
            <div className="d-flex align-items-center mb-3">
                <a href="#" className="avatar avatar-sm me-3">
                        <span className="avatar-text rounded-circle">
                            <i className="bi bi-search"></i>
                        </span>
                </a>
                <a href="#" className="flex-fill">Current users</a>
                <a href="#" className="btn" data-bs-toggle="tooltip" title="Remove">
                    <i className="bi bi-x"></i>
                </a>
            </div>
            <div className="d-flex align-items-center mb-3">
                <a href="#" className="avatar avatar-sm me-3">
                        <span className="avatar-text rounded-circle">
                            <i className="bi bi-search"></i>
                        </span>
                </a>
                <a href="#" className="flex-fill">Meeting notes</a>
                <a href="#" className="btn" data-bs-toggle="tooltip" title="Remove">
                    <i className="bi bi-x"></i>
                </a>
            </div>
        </div>
        <h6 className="mb-3">Recently viewed</h6>
        <div className="mb-4">
            <div className="d-flex align-items-center mb-3">
                <a href="#" className="avatar avatar-secondary avatar-sm me-3">
                        <span className="avatar-text rounded-circle">
                            <i className="bi bi-check-circle"></i>
                        </span>
                </a>
                <a href="#" className="flex-fill">Todo list</a>
                <a href="#" className="btn" data-bs-toggle="tooltip" title="Remove">
                    <i className="bi bi-x"></i>
                </a>
            </div>
            <div className="d-flex align-items-center mb-3">
                <a href="#" className="avatar avatar-warning avatar-sm me-3">
                        <span className="avatar-text rounded-circle">
                            <i className="bi bi-wallet2"></i>
                        </span>
                </a>
                <a href="#" className="flex-fill">Pricing table</a>
                <a href="#" className="btn" data-bs-toggle="tooltip" title="Remove">
                    <i className="bi bi-x"></i>
                </a>
            </div>
            <div className="d-flex align-items-center mb-3">
                <a href="#" className="avatar avatar-info avatar-sm me-3">
                        <span className="avatar-text rounded-circle">
                            <i className="bi bi-gear"></i>
                        </span>
                </a>
                <a href="#" className="flex-fill">Settings</a>
                <a href="#" className="btn" data-bs-toggle="tooltip" title="Remove">
                    <i className="bi bi-x"></i>
                </a>
            </div>
            <div className="d-flex align-items-center mb-3">
                <a href="#" className="avatar avatar-success avatar-sm me-3">
                        <span className="avatar-text rounded-circle">
                            <i className="bi bi-person-circle"></i>
                        </span>
                </a>
                <a href="#" className="flex-fill">Users</a>
                <a href="#" className="btn" data-bs-toggle="tooltip" title="Remove">
                    <i className="bi bi-x"></i>
                </a>
            </div>
        </div>
    </div>
    <div className="sidebar-action">
        <a href="#" className="btn btn-danger">All Clear</a>
    </div>
</div>
<div className="menu">
    <div className="menu-header">
        <a href="#" className="menu-header-logo">
            <img src="https://icon-library.com/images/e-commerce-icon-png/e-commerce-icon-png-17.jpg" style={{width : '50px'}} alt="logo"/>
            <h2 style={{paddingLeft:'15px', paddingTop:'12px', }}>StudentPortal</h2>

        </a>
        <a href="#" className="btn btn-sm menu-close-btn">
            <i className="bi bi-x"></i>
        </a>
    </div>
    <div className="menu-body">
        <div className="dropdown">
            <a href="#" className="d-flex align-items-center" data-bs-toggle="dropdown">
                <div className="avatar me-3">
                    <img src="allassets/assets/images/user/man_avatar3.jpg"
                         className="rounded-circle" alt="image"/>
                </div>
                <div>
                    <div className="fw-bold">perez</div>
                    <small className="text-muted">Sales Person</small>
                </div>
            </a>
            <div className="dropdown-menu dropdown-menu-end">
                <a href="#" className="dropdown-item d-flex align-items-center">
                    <i className="bi bi-person dropdown-item-icon"></i> Profile
                </a>
                <a href="#" className="dropdown-item d-flex align-items-center">
                    <i className="bi bi-envelope dropdown-item-icon"></i> Inbox
                </a>
                <a href="#" className="dropdown-item d-flex align-items-center" data-sidebar-target="#settings">
                    <i className="bi bi-gear dropdown-item-icon"></i> Settings
                </a>
                <a href="login.html" className="dropdown-item d-flex align-items-center text-danger"
                   target="_blank">
                    <i className="bi bi-box-arrow-right dropdown-item-icon"></i> Logout
                </a>
            </div>
        </div>
        <ul>
                <li className="menu-divider">Student Manager</li>
            <li>
                <NavLink className="dropdown-item" to={`/` }>
                    <span className="nav-link-icon">
                        <i className="bi bi-bar-chart"></i>
                    </span>
                    <span>Dashboard</span>
                    
                    </NavLink>{" "}
            </li>
            <li>
            <NavLink className="dropdown-item" to={`/students` }>
                    <span className="nav-link-icon">
                        <i className="bi bi-receipt"></i>
                    </span>
                    <span>Students</span>
                    </NavLink>{" "}
            </li>
            <li>
            <NavLink className="dropdown-item" to={`/phones` }>
                    <span className="nav-link-icon">
                        <i className="bi bi-phone"></i>
                    </span>
                    <span>Enrollments</span>
                    </NavLink>{" "}
            </li>
            <li>
            <NavLink className="dropdown-item" to={`/courses` }>
                    <span className="nav-link-icon">
                        <i className="bi bi-person-badge"></i>
                    </span>
                    <span>courses</span>
                    </NavLink>{" "}
            </li>
            <li>
            <NavLink className="dropdown-item" to={`/instructors` }>
                    <span className="nav-link-icon">
                        <i className="bi bi-receipt"></i>
                    </span>
                    <span>instructors</span>
                    </NavLink>{" "}
            </li>
            <li>
            <NavLink className="dropdown-item" to={`/admin` }>
                    <span className="nav-link-icon">
                        <i className="bi bi-person-badge"></i>
                    </span>
                    <span>Admin</span>
                    </NavLink>{" "}
            </li>
          
                </ul>
    </div>
</div>
</>
  )
}

export default SideBar
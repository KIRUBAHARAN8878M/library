import React from 'react';
import { Link } from 'react-router-dom';


function Dashboard() {
  
    return (
        <div id='dashboard' >
            <div className="container" >
                <div className="row ">
                    <div className='d-flex align-items-center justify-content-center mx-auto mt-5 p-5'>
                       
                            
                    </div>
                    <div className='d-flex align-items-center justify-content-center mx-auto mt-5 p-5'>
                    <Link to="/portal/add-book" className=" btn btn-outline-dark btn-primary mt-2 mx-2 fw-bold">
                            
                            Add Book</Link>
                    <Link className=" btn btn-outline-dark btn-primary mx-2 mt-2 fw-bold " to="/portal/bookscorner">
                                <span>Books Corner</span>
                            </Link>
                            
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Dashboard;

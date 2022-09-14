import React from 'react'
import {  useNavigate } from 'react-router-dom';

function Login() {
    let navigate= useNavigate();
    let username ="abc";
    let pass = "123";
    let login =()=>{
        if(username =="abc" && pass=="123"){
            navigate("/portal/dashboard");
        }else{
            alert("Worng data");
        }
    }
    return (

        <div className="container">

            {/* <!-- Outer Row --> */}
            <div className="row ">

                <div className="col-xl-12 col-lg-12 col-md-12">

                    <div className="card  my-5">
                        <div className="card-body ">
                            {/* <!-- Nested Row within Card Body --> */}
                            
                              
                                <div className="col-lg-6 mx-auto p-0">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                        </div>
                                        <form className="user">
                                            <div className="form-group">
                                                <input type="email" className="form-control form-control-user"
                                                    id="exampleInputEmail" aria-describedby="emailHelp"
                                                    placeholder="Enter Email Address..." />
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control form-control-user"
                                                    id="exampleInputPassword" placeholder="Password" />
                                            </div>
                                            <div className="form-group">
                                                <div className="custom-control custom-checkbox small">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck" />
                                                        <label className="custom-control-label" for="customCheck">Remember
                                                            Me</label>
                                                </div>
                                            </div>


                                            <button onClick={login} className="btn btn-primary btn-user btn-block">
                                                Login
                                            </button>

                                            
                                        </form>
                                        <hr />
                                            <div className="text-center">
                                                <a className="small" href="forgot-password.html">Forgot Password?</a>
                                            </div>
                                            <div className="text-center">
                                                <a className="small" href="register.html">Create an Account!</a>
                                            </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Login;
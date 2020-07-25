import React, { Component } from "react";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Redirect } from "react-router-dom";
import { Link } from 'react-router-dom';

class DashboardLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: null,
            password: null,
            login: false,
            active: null,
            redirect: null
        };
    }


    login = (e) => {
        e.preventDefault();
        // console.log(this.state);
        let LOGIN_API = 'http://localhost:3000/login/admin';
        fetch(LOGIN_API, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                "userName":this.state.userName,
                "password":this.state.password
            }),
        }).then((response) => {
            response.json().then((result) => {
                console.log("result", result);
                if(result.message){
                    // console.log("No User Found")
                    toast.error("🚫 User Not Found, UserName/Password does not Match", {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
                if(result && result._id){
                    localStorage.setItem(
                        "login",
                        JSON.stringify({
                            login: true,
                            userName: result.userName,
                            userid: result._id,
                            userrole: result.role,
                        })
                    );
                    let userFullName = result.fullName;

                    toast.success("✔️ Welcome "+userFullName+", You're Loged In Succesfully !", {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });

                }

                setTimeout(function() { //Start the timer
                    this.storeCollector(); //After 2 second
                }.bind(this), 2000)
            });
        });
    };

    componentDidMount() {
        this.storeCollector();
    }

    storeCollector() {
        let active = JSON.parse(localStorage.getItem("login"));
        if (active && active.login) {
            this.setState({
                login: true,
                active: active,
                redirect: "/"
            });
        }
    }

    reload(){
        window.location.reload(false);
    }


    render() {
        if (this.state.login) {
            return (
                <div>
                    <Redirect to="/login"/>
                    <a href="http://localhost:3001/" onClick={this.reload()}> </a>
                </div>
            )
        }
        return (
            <div>
                <div>
                    {/*<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />*/}
                    <div className="container">
                        <div className="d-flex justify-content-center h-100">
                            <div className="card">
                                <div className="card-header">
                                    <h3>Sign In</h3>
                                    <div className="d-flex justify-content-end social_icon">
                                        <span><i className="fab fa-facebook-square" /></span>
                                        <span><i className="fab fa-google-plus-square" /></span>
                                        <span><i className="fab fa-twitter-square" /></span>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <form
                                        autoComplete="off"
                                        onSubmit={(e) => {
                                            this.login(e);
                                        }}
                                    >
                                        <div className="input-group form-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="fas fa-user" /></span>
                                            </div>
                                            <input
                                                className="form-control"
                                                placeholder="username"
                                                type="text"
                                                id="exampleInputEmail1"
                                                onChange={(event) => {
                                                    this.setState({ userName: event.target.value });
                                                }}
                                                value={this.state.userName}
                                                required
                                            />
                                        </div>
                                        <div className="input-group form-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="fas fa-key" /></span>
                                            </div>
                                            <input
                                                className="form-control"
                                                placeholder="password"
                                                type="password"
                                                id="exampleInputPassword1"
                                                onChange={(event) => {
                                                    this.setState({ password: event.target.value });
                                                }}
                                                value={this.state.password}
                                                required
                                            />
                                        </div>
                                        <div className="row align-items-center remember">
                                            <input type="checkbox" />Remember Me
                                        </div>
                                        <div className="form-group">
                                            <input type="submit" defaultValue="Login" className="btn float-right login_btn" />
                                        </div>
                                    </form>
                                </div>
                                <div className="card-footer">
                                    <div className="d-flex justify-content-center links">
                                        <nav>
                                            Don't have an account?<a href="#">Sign Up</a>
                                        </nav>
                                    </div>

                                    <div className="d-flex justify-content-center">
                                        <a href="">Forgot your password?</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default DashboardLogin;

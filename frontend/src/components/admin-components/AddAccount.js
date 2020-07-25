import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class AddAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: "",
            userName: "",
            email: "",
            contactNo: "",
            password: "",
            confirmPassword: "",
            redirect: null,
        };
    }

    onSubmitHandler = (e) => {
        e.preventDefault();
        // alert(JSON.stringify(this.state));
        this.postData();
    };

    async postData() {
        try {
            let result = await fetch("http://localhost:3000/adminUser", {
                method: "post",
                headers: {
                    Accept: "application/json",
                    "Content-type": "application/json",
                },
                body: JSON.stringify(this.state),
            });
            console.log("Result: " + result);
            toast.success("✔️ Account Added Susseccfully !", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            // setTimeout(function() { //Start the timer
            //     this.setState({ redirect: "/adminUser" });//After 3 second, set redirect to true
            // }.bind(this), 3000)

        } catch (error) {
            console.log(error.message);
        }
    }

    onChangeHandler = (e) => {
        const { name, value } = e.target;

        this.setState({
            [name]: value,
        });
    };

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />;
        }
        return (
            <div>
                <ToastContainer />
                <link href="https://fonts.googleapis.com/css?family=Roboto|Courgette|Pacifico:400,700" rel="stylesheet" />
                <title>Bootstrap Start Free Trail Sign up Form</title>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
                <style type="text/css" dangerouslySetInnerHTML={{__html: "\n\tbody{\n\t\tcolor: #999;\n\t\tbackground: #e2e2e2;\n\t\tfont-family: 'Roboto', sans-serif;\n\t}\n\t.form-control{\n\t\tmin-height: 41px;\n\t\tbox-shadow: none;\n\t\tborder-color: #e1e1e1;\n\t}\n\t.form-control:focus{\n\t\tborder-color: #00cb82;\n\t}\t\n    .form-control, .btn{        \n        border-radius: 3px;\n    }\n\t.form-header{\n\t\tmargin: -30px -30px 20px;\n\t\tpadding: 30px 30px 10px;\n\t\ttext-align: center;\n\t\tbackground: #00cb82;\n\t\tborder-bottom: 1px solid #eee;\n\t\tcolor: #fff;\n\t}\n\t.form-header h2{\n\t\tfont-size: 34px;\n\t\tfont-weight: bold;\n        margin: 0 0 10px;\n\t\tfont-family: 'Pacifico', sans-serif;\n    }\n\t.form-header p{\n\t\tmargin: 20px 0 15px;\n\t\tfont-size: 17px;\n\t\tline-height: normal;\n\t\tfont-family: 'Courgette', sans-serif;\n\t}\n    .signup-form{\n\t\twidth: 390px;\n\t\tmargin: 0 auto;\t\n\t\tpadding: 30px 0;\t\n\t}\n    .signup-form form{\n\t\tcolor: #999;\n\t\tborder-radius: 3px;\n    \tmargin-bottom: 15px;\n        background: #f0f0f0;\n        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n        padding: 30px;\n    }\n\t.signup-form .form-group{\n\t\tmargin-bottom: 20px;\n\t}\t\t\n\t.signup-form label{\n\t\tfont-weight: normal;\n\t\tfont-size: 13px;\n\t}\n    .signup-form input[type=\"checkbox\"]{\n\t\tmargin-top: 2px;\n\t}\n    .signup-form .btn{        \n        font-size: 16px;\n        font-weight: bold;\n\t\tbackground: #00cb82;\n\t\tborder: none;\n\t\tmin-width: 200px;\n    }\n\t.signup-form .btn:hover, .signup-form .btn:focus{\n\t\tbackground: #00b073 !important;\n        outline: none;\n\t}\n    .signup-form a{\n\t\tcolor: #00cb82;\t\t\n\t}\n    .signup-form a:hover{\n\t\ttext-decoration: underline;\n\t}\n" }} />
                <div className="signup-form">
                    <form onSubmit={this.onSubmitHandler} autoComplete="off">
                        <div className="form-header">
                            <h2>Sign Up</h2>
                            <p>Fill out this form to start your free trial!</p>
                        </div>
                        <div className="form-group">
                            <label>Full Name</label>
                            <input type="text" className="form-control"
                                   id="inputFullName"
                                   name="fullName"
                                   value={this.state.fullName}
                                   onChange={this.onChangeHandler}
                                   required/>
                        </div>
                        <div className="form-group">
                            <label>Username</label>
                            <input type="text" className="form-control"
                                   id="inputUsername"
                                   name="userName"
                                   value={this.state.userName}
                                   onChange={this.onChangeHandler}
                                   required />
                        </div>
                        <div className="form-group">
                            <label>Email Address</label>
                            <input type="email" className="form-control"
                                   id="inputEmail"
                                   name="email"
                                   value={this.state.email}
                                   onChange={this.onChangeHandler}
                                   required />
                        </div>
                        <div className="form-group">
                            <label>Contact Number</label>
                            <input  className="form-control" type="number"
                                   id="inputContactNo"
                                   name="contactNo"
                                   value={this.state.contactNo}
                                   onChange={this.onChangeHandler} />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control"
                                   id="inputPassword"
                                   name="password"
                                   value={this.state.password}
                                   onChange={this.onChangeHandler}
                                   required />
                        </div>
                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input type="password" className="form-control"
                                   id="inputConfirmPassword"
                                   name="confirmPassword"
                                   value={this.state.confirmPassword}
                                   onChange={this.onChangeHandler}
                                   required />
                        </div>
                        <div className="form-group">
                            <label className="checkbox-inline"><input type="checkbox" required="required" /> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-block btn-lg">Sign Up</button>
                        </div>
                    </form>
                    <div className="text-center small">Already have an account? <a href="#">Login here</a></div>
                </div>
                {/* Add Account area end */}
            </div>
        );
    }
}

export default AddAccount;

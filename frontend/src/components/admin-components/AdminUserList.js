import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class AdminUserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            adminUsers: [],
            isLoaded: false,
            redirect: null,
        };
    }

    editAction(adminUser) {
        // alert("Edit = " + adminUser._id);
        window.sessionStorage.setItem("selectedUserID:", adminUser._id);
    }

    deleteAction(adminUser) {
        const API_URL = "http://localhost:3000/adminUser/" + adminUser._id;

        try {
            let result = fetch(API_URL, { method: "delete" });

            console.log("Result: " + result);
            toast.success("✔️ Account Deleted Succesfully !", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            setTimeout(function() { //Start the timer
                this.componentDidMount(); //After 1 second
            }.bind(this), 1000)

        } catch (error) {
            console.log(error.message);
        }
    }

    componentDidMount() {
        fetch("http://localhost:3000/adminUser")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    isLoaded: true,
                    adminUsers: json,
                });
            });
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />;
        }
        let { isLoaded, adminUsers } = this.state;
        if (!isLoaded) {
            return (
                <div>
                    <h4 className="header-title">Manage Administrator Users</h4>
                    Loading...
                </div>
            );
        } else {
            return (
                <div>
                    <ToastContainer />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto|Varela+Round|Open+Sans" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
                    <style type="text/css" dangerouslySetInnerHTML={{__html: "\n    body {\n        color: #404E67;\n        background: #F5F7FA;\n\t\tfont-family: 'Open Sans', sans-serif;\n\t}\n\t.table-wrapper {\n\t\twidth: 700px;\n\t\tmargin: 30px auto;\n        background: #fff;\n        padding: 20px;\t\n        box-shadow: 0 1px 1px rgba(0,0,0,.05);\n    }\n    .table-title {\n        padding-bottom: 10px;\n        margin: 0 0 10px;\n    }\n    .table-title h2 {\n        margin: 6px 0 0;\n        font-size: 22px;\n    }\n    .table-title .add-new {\n        float: right;\n\t\theight: 30px;\n\t\tfont-weight: bold;\n\t\tfont-size: 12px;\n\t\ttext-shadow: none;\n\t\tmin-width: 100px;\n\t\tborder-radius: 50px;\n\t\tline-height: 13px;\n    }\n\t.table-title .add-new i {\n\t\tmargin-right: 4px;\n\t}\n    table.table {\n        table-layout: fixed;\n    }\n    table.table tr th, table.table tr td {\n        border-color: #e9e9e9;\n    }\n    table.table th i {\n        font-size: 13px;\n        margin: 0 5px;\n        cursor: pointer;\n    }\n    table.table th:last-child {\n        width: 100px;\n    }\n    table.table td a {\n\t\tcursor: pointer;\n        display: inline-block;\n        margin: 0 5px;\n\t\tmin-width: 24px;\n    }    \n\ttable.table td a.add {\n        color: #27C46B;\n    }\n    table.table td a.edit {\n        color: #FFC107;\n    }\n    table.table td a.delete {\n        color: #E34724;\n    }\n    table.table td i {\n        font-size: 19px;\n    }\n\ttable.table td a.add i {\n        font-size: 24px;\n    \tmargin-right: -1px;\n        position: relative;\n        top: 3px;\n    }    \n    table.table .form-control {\n        height: 32px;\n        line-height: 32px;\n        box-shadow: none;\n        border-radius: 2px;\n    }\n\ttable.table .form-control.error {\n\t\tborder-color: #f50000;\n\t}\n\ttable.table td .add {\n\t\tdisplay: none;\n\t}\n" }} />
                    <div className="container">
                        <div className="table-wrapper">
                            <div className="table-title">
                                <div className="row">
                                    <div className="col-sm-8"><h2>Administrator <b>Details</b></h2></div>

                                </div>
                            </div>
                            <table className="table table-bordered">
                                <thead>
                                <tr>
                                    <th>Index</th>
                                    <th>User Name</th>
                                    <th>Full Name</th>
                                    <th>Role</th>
                                    <th>Email</th>
                                    <th>Contact No.</th>

                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                                </thead>
                                <tbody>
                                {adminUsers.map((adminUser) => (
                                    <tr key={adminUser._id}>
                                        <th scope="row">
                                            {adminUsers.indexOf(adminUser) + 1}
                                        </th>

                                    <td>{adminUser.userName}</td>
                                    <td>{adminUser.fullName}</td>
                                    <td>{adminUser.role}</td>
                                    <td>{adminUser.email}</td>
                                    <td>{adminUser.contactNo}</td>
                                   <td>
                                        <button
                                            style={{
                                                padding: 0,
                                                border: "none",
                                                background: "none",
                                            }}
                                            onClick={() => this.editAction(adminUser)}
                                        >

                                            <a href="/editadminuser" className="edit" title="Edit" data-toggle="tooltip"><i
                                                className="material-icons">&#xE254;</i></a>
                                        </button>
                                    </td>
                                    <td>
                                    <button
                                    style={{
                                    padding: 0,
                                    border: "none",
                                    background: "none",
                                }}
                                    onClick={() => this.deleteAction(adminUser)}
                                    >
                                        <a className="delete" title="Delete" data-toggle="tooltip"><i
                                            className="material-icons">&#xE872;</i></a>

                                    </button>
                                    </td>
                                    </tr>
                                    ))}
                                    </tbody>


                            </table>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default AdminUserList;

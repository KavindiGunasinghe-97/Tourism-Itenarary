import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class AddPlace extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtName: "",
            txtEmail: "",
            txtHighlight: "",
            txtMsg: "",
            txtPhone: "",
            txtPrice: "",
            txtRoute: "",
            txtDays: "",
            image: null,
            redirect: null,
        };
        this.onImageChange = this.onImageChange.bind(this);
    }

    onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            this.setState({
                image: URL.createObjectURL(img)
            });
        }
    };
    onSubmitHandler = (e) => {
        e.preventDefault();
        // alert(JSON.stringify(this.state));
        this.postData();
    };

    async postData() {
        try {
            let result = await fetch("http://localhost:3000/newPlace", {
                method: "post",
                headers: {
                    Accept: "application/json",
                    "Content-type": "application/json",
                },
                body: JSON.stringify(this.state),
            });
            console.log("Result: " + result);
            toast.success("✔️ Itinerary Added Susseccfully !", {
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
                {/*<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />*/}
                {/*---- Include the above in your HEAD tag --------*/}
                <div className="container contact-form">
                    <div className="contact-image">
                        <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact" />
                    </div>
                    <form onSubmit={this.onSubmitHandler} autoComplete="off">
                        <h3>Tourists Itinerary</h3>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" name="txtName" className="form-control" placeholder="Your Name *"
                                           id="txtName"
                                           value={this.state.txtName}
                                           onChange={this.onChangeHandler}
                                           required/>
                                </div>
                                <div className="form-group">
                                    <input type="text" name="txtEmail" className="form-control" placeholder="Your Email *"
                                           id="txtEmail"
                                           value={this.state.txtEmail}
                                           onChange={this.onChangeHandler}
                                           required/>
                                </div>
                                <div className="form-group">
                                    <input type="text" name="txtPhone" className="form-control" placeholder="Your Phone Number *"
                                           id="txtPhone"
                                           value={this.state.txtPhone}
                                           onChange={this.onChangeHandler}
                                           required/>
                                </div>
                                <div className="form-group">
                                    <input type="number" name="txtPrice" className="form-control" placeholder="Price Range *"
                                           id="txtPrice"
                                           value={this.state.txtPrice}
                                           onChange={this.onChangeHandler}
                                           required/>
                                </div>
                                <br/>
                                <div>
                                    <img src={this.state.image} width="230" height="200" />
                                    <br/>
                                    <br/>
                                    <h5>Add Image</h5>
                                    <input type="file" name="image" onChange={this.onImageChange}

                                           required/>
                                </div>
                                <br/>


                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" name="txtRoute" className="form-control" placeholder="Route *"
                                           id="txtRoute"
                                           value={this.state.txtRoute}
                                           onChange={this.onChangeHandler}
                                           required/>
                                </div>
                                <div className="form-group">
                                    <input type="number" name="txtDays" className="form-control" placeholder="Number of Days *"
                                           id="txtDays"
                                           value={this.state.txtDays}
                                           onChange={this.onChangeHandler}
                                           required/>
                                </div>
                                <div className="form-group">
                                    <input type="text" name="txtHighlight" className="form-control" placeholder="Highlights (ex: Bird watching, Elephant Safari)  *"
                                           id="txtPhone"
                                           value={this.state.txtHighlight}
                                           onChange={this.onChangeHandler}
                                           required/>
                                </div>
                                <div className="form-group">
                                    <textarea name="txtMsg" className="form-control" placeholder="More Information *" style={{width: '100%', height: '270px'}} defaultValue={""}
                                              id="txtMsg"
                                              value={this.state.txtMsg}
                                              onChange={this.onChangeHandler}
                                              required/>
                                </div>
                                <br/>
                                <br/>


                                <div className="form-group">
                                    <input type="submit" name="btnSubmit" className="btnContact" defaultValue="Send Message" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                {/* Add Account area end */}
            </div>
        );
    }
}

export default AddPlace;

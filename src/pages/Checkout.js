import React, { Component } from 'react';

class Checkout extends Component {
    state = {
        values: {
            deliveryAdress: "",
            phone: "",
            paymentType: "Cash On Delivery"
        }
    }
    goBack = () => {
        this.props.history.goBack("/");
    }
    inputChangeHandler = e => {
        this.setState({
            values: {
                ...this.state.values,
                [e.target.name]: e.target.value
            }
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state.values)
    }
    render() {
        return (
            <div className="container">
                <form className="my-5">
                    <div className="form-group">
                        <textarea
                            className="form-control"
                            name="deliveryAdress"
                            placeholder="Enter Your Address"
                            value={this.state.values.deliveryAdress}
                            onChange={(e)=>this.inputChangeHandler(e)}
                        >
                        </textarea>
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            name="phone"
                            placeholder="Enter Your Phone"
                            value={this.state.values.phone}
                            onChange={(e)=>this.inputChangeHandler(e)}
                        />
                    </div>
                    <div className="form-group">
                        <select
                            className="form-control"
                            name="paymentType"
                            value={this.state.values.paymentType}
                            onChange={(e)=>this.inputChangeHandler(e)}

                        >
                            <option value="Cash On Delivery">Cash On Delivery</option>
                            <option value="Bkash">Bkash</option>
                            
                        </select>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary" onClick={this.submitHandler}>Place Order</button>
                        <button type="button" className="btn btn-danger" style={{marginLeft:"10px"}} onClick={this.goBack}>Cancel</button>
                    </div>
                </form>
            </div>
        )
    }
};

export default Checkout;

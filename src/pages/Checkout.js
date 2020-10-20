import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Modal, ModalBody, Spinner } from 'reactstrap';
import { resetIngredient } from '../redux/actions/burger';

class Checkout extends Component {
    state = {
        values: {
            deliveryAdress: "",
            phone: "",
            paymentType: "Cash On Delivery"
        },
        isLoading: false,
        isModalOpen: false,
        modalMsg: ""
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
        this.setState({
            isLoading: true
        })
        const order = {
            ingredients: this.props.ingredients,
            customer: this.state.values,
            price: this.props.totalPrice,
            orderTime: new Date(),
            userId: this.props.userId
        }
        axios.post('https://burger-builder-b6eae.firebaseio.com/orders.json?auth='+this.props.token, order)
            .then(response => {
                if (response.status === 200) {
                    this.setState({
                        isLoading: false,
                        isModalOpen: true,
                        modalMsg: "Congratulation,Order Palce Successfully."
                    });
                    this.props.resetIngredient();
                }
                else {
                    this.setState({
                        isLoading: false,
                        isModalOpen: true,
                        modalMsg: "Opps,Something Went Wrong! Please Order Again!"
                    })
                }
            })
            .catch(err => {
                this.setState({
                    isLoading: false,
                    isModalOpen: true,
                    modalMsg: "Opps,Something Went Wrong! Please Order Again!"
                })
            })
    }
    render() {
        let form = (
            <div>
                <h3>Total Price: {this.props.totalPrice} BDT</h3>
                <form className="my-3">
                    <div className="form-group">
                        <textarea
                            className="form-control"
                            name="deliveryAdress"
                            placeholder="Enter Your Address"
                            value={this.state.values.deliveryAdress}
                            onChange={(e) => this.inputChangeHandler(e)}
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
                            onChange={(e) => this.inputChangeHandler(e)}
                        />
                    </div>
                    <div className="form-group">
                        <select
                            className="form-control"
                            name="paymentType"
                            value={this.state.values.paymentType}
                            onChange={(e) => this.inputChangeHandler(e)}

                        >
                            <option value="Cash On Delivery">Cash On Delivery</option>
                            <option value="Bkash">Bkash</option>

                        </select>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary" onClick={this.submitHandler} disabled={!this.props.purchaseable}>Place Order</button>
                        <button type="button" className="btn btn-danger" style={{ marginLeft: "10px" }} onClick={this.goBack}>Cancel</button>
                    </div>
                </form>
            </div>
        )
        return (
            <div className="container my-5">
                { this.state.isLoading ? <Spinner /> : form}
                <Modal isOpen={this.state.isModalOpen} onClick={this.goBack}>
                    <ModalBody>
                        <p>{this.state.modalMsg}</p>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        ingredients: state.burger.ingredients,
        totalPrice: state.burger.totalPrice,
        purchaseable: state.burger.purchaseable,
        userId: state.auth.userId,
        token: state.auth.token
    }
};

const mapDispatchToProps = dispatch => {
    return {
        resetIngredient: () => dispatch(resetIngredient())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Checkout);

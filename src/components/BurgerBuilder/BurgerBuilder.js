import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {addIngredient,removeIngredient,updatePurchasable} from '../../redux/actions/burger';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import Burger from './Burger/Burger';
import Controls from './Controls/Controls';
import Summary from './Summary/Summary';

class BurgerBuilder extends Component {
    state = {
        modalOpen: false
    }
    addIngredientHandle = type => {
        this.props.addIngredient(type);
    }

    removeIngredientHandle = type => {
        // const ingredients = [...this.state.ingredients];

        // const newPrice = this.state.totalPrice - ingredientsPrice[type];

        // for( let item of ingredients) {
        //     if( item.type === type ) {
        //         if(item.amount <= 0) return;
        //         item.amount--;
        //     };
        // }

        // this.setState({
        //     ingredients,
        //     totalPrice: newPrice
        // })

        // this.updatePurchaseable(ingredients);
    }

    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }

    updatePurchaseable = ingredients => {
        const sum = ingredients.reduce((sum,element)=>{
            return sum += element.amount;
        },0);

        this.setState({
            purchaseable: sum > 0
        })
    }

    handleCheckout = () => {
        this.props.history.push("/checkout");
    }

    render() {
        console.log(this.props)
        return (
            <Fragment>
                <div className="container">
                    <div className="row my-5">
                        <div className="col-lg-6">
                            <Burger ingredients={this.props.ingredients}/>
                        </div>
                        <div className="col-lg-6">
                            <Controls 
                                ingredientAdded = {this.addIngredientHandle}
                                ingredientRemoved = {this.removeIngredientHandle}
                                price={this.props.totalPrice}
                                toggleModal={this.toggleModal}
                                purchaseable={this.props.purchaseable}
                            />
                        </div>
                    </div>
                    <Modal isOpen={this.state.modalOpen}>
                        <ModalHeader>Your Order Summary</ModalHeader>
                        <ModalBody>
                            <h5>Total Price: {this.props.totalPrice.toFixed(0)} BDT </h5>
                            <Summary ingredients={this.props.ingredients}/>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="success" onClick={this.handleCheckout}>Continue to Checkout</Button>
                            <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </Fragment>
        )
    }
};

const mapStateToProps = state => {
    return {
        ingredients: state.burger.ingredients,
        totalPrice: state.burger.totalPrice,
        purchaseable: state.burger.purchaseable
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addIngredient: ingredientType => dispatch(addIngredient(ingredientType)),
        removeIngredient: ingredientType => dispatch(removeIngredient(ingredientType)),
        updatePurchasable: () => dispatch(updatePurchasable)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BurgerBuilder);
